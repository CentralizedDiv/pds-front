import axios, { CancelTokenSource } from "axios";
import { black } from "components/shared/colors";
import { ProgressBarCP } from "components/shared/progress-bar/progress-bar.component";
import { TextCP, TextType } from "components/shared/text/text.component";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { axiosInstance } from "__config/axios";
import { FileListItemCP } from "../file-list-item/file-list-item.component";
import { UploaderCP } from "../uploader/uploader.component";
import {
  FileListContainer,
  FileListGlobalProgressContainer,
} from "./file-list.styles";

interface FileListProps {
  multiple?: boolean;
}

interface FileUploadInfo {
  file: File;
  url: string;
  progress: number;
  error: true | null;
  success: true | null;
  cancelSource: CancelTokenSource;
}

export const FileListCP: React.FC<FileListProps> = ({ multiple = true }) => {
  const [files, setFiles] = useState<FileUploadInfo[]>([]);
  const successUploaded = useMemo(
    () => files.filter((file) => file.success).length,
    [files]
  );

  const updateFile = useCallback(
    (url: string, data: Partial<FileUploadInfo>) => {
      setFiles((state) =>
        state.map((file) => (file.url === url ? { ...file, ...data } : file))
      );
    },
    []
  );

  const processUpload = useCallback(
    (uploadedFile: FileUploadInfo) => {
      const data = new FormData();

      if (uploadedFile.file) {
        data.append("file", uploadedFile.file, uploadedFile.file.name);
      }

      axios
        .post("http://localhost:3002/upload", data, {
          onUploadProgress: (progressEvent) => {
            const progress: number = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            updateFile(uploadedFile.url, {
              progress,
            });
          },
          cancelToken: uploadedFile.cancelSource.token,
        })
        .then(() => {
          updateFile(uploadedFile.url, { success: true });
        })
        .catch((thrown) => {
          if (!axios.isCancel(thrown)) {
            updateFile(uploadedFile.url, { error: true });
          }
        });
    },
    [updateFile]
  );

  const handleDelete = useCallback((file: FileUploadInfo) => {
    if (file.progress !== 100) {
      // @TODO cancel upload request
      file.cancelSource.cancel();
    }
    setFiles((_files) => _files.filter((_file) => _file.url !== file.url));
  }, []);

  const handleFileChange = useCallback(
    (_files: File[]) => {
      const uploadingFiles = _files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
        progress: 0,
        error: null,
        success: null,
        cancelSource: axios.CancelToken.source(),
      }));
      uploadingFiles.forEach((file) => {
        processUpload(file);
      });
      setFiles((state) => {
        const names = uploadingFiles.map((f) => f.file.name);
        return [
          ...uploadingFiles,
          ...state.filter((f) => !names.includes(f.file.name)),
        ];
      });
    },
    [processUpload]
  );

  return (
    <FileListContainer>
      <UploaderCP multiple={multiple} onDrop={handleFileChange} />
      {files.length > 1 && (
        <FileListGlobalProgressContainer>
          <TextCP type={TextType.TEXT_14} color={black}>
            {successUploaded} de {files.length} arquivos enviados
          </TextCP>
          <ProgressBarCP
            current={successUploaded}
            total={files.length}
            currentColor={black}
            containerColor={"rgba(31,31,31,0.2)"}
          />
        </FileListGlobalProgressContainer>
      )}
      {files.map((file, index) => {
        return (
          <FileListItemCP
            key={file.file.name + index}
            name={file.file.name}
            url={file.url}
            progress={file.progress}
            error={file.error}
            success={file.success}
            onDelete={() => handleDelete(file)}
          />
        );
      })}
    </FileListContainer>
  );
};
