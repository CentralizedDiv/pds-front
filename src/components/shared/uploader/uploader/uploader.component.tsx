import { text_secondary, error as error_color } from "components/shared/colors";
import React, { useCallback, useRef, useState } from "react";
import { DropTargetMonitor, useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";
import { MdCloudUpload } from "react-icons/md";
import { TextCP, TextType } from "../../text/text.component";
import { FileButton, UploaderContainer } from "./uploader.styles";

const validImageTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/raw",
  "image/cr2",
  "image/nef",
  "image/orf",
  "image/sr2",
];

interface UploaderProps {
  onDrop: (files: File[]) => void;
  multiple?: boolean;
}

export const UploaderCP: React.FC<UploaderProps> = ({
  onDrop,
  multiple = true,
}) => {
  const [error, setError] = useState<string | null>(null);

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item: { files: File[] }) {
        if (onDrop) {
          setError(null);
          if (item.files.length > 1 && !multiple) {
            setError("Arraste apenas um arquivo.");
            return;
          }
          const allValidFiles = item.files.every((file) =>
            validImageTypes.includes(file.type)
          );
          if (!allValidFiles) {
            setError(
              "Arraste apenas arquivos de imagem válidos (jpg, jpeg, png, raw, cr2)"
            );
            return;
          }
          onDrop(item.files);
        }
      },
      collect: (monitor: DropTargetMonitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [onDrop]
  );

  const handleFileInputChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(ev.target.files ?? []);
      if (!multiple && files.length > 1) {
        setError("Escolha apenas um arquivo.");
        return;
      } else {
        setError(null);
      }
      const allValidFiles = Array.from(files).every((file) =>
        validImageTypes.includes(file.type)
      );
      if (!allValidFiles) {
        setError(
          "Escolha apenas arquivos de imagem válidos (jpg, jpeg, png, raw, cr2)"
        );
        return;
      } else {
        setError(null);
      }
      onDrop(files);
    },
    [multiple, onDrop]
  );

  const isActive = canDrop && isOver;

  const uniqueId = useRef(Math.random());

  return (
    <UploaderContainer ref={drop} isActive={isActive}>
      <MdCloudUpload color="#ffffff" size={48} />
      <TextCP>
        {isActive
          ? "Solte para enviar!"
          : "Arraste e solte seus arquivos aqui!"}
      </TextCP>
      <TextCP type={TextType.TEXT_14} color={text_secondary}>
        ou
      </TextCP>
      <label htmlFor={uniqueId.current.toString()}>
        <FileButton>
          <TextCP type={TextType.TEXT_14}>Escolher arquivo(s)</TextCP>
        </FileButton>
        <input
          id={uniqueId.current.toString()}
          multiple={multiple}
          type="file"
          accept={validImageTypes.join(", ")}
          style={{ display: "none" }}
          onChange={handleFileInputChange}
          onClick={(ev) => ((ev.target as HTMLInputElement).value = "")}
        />
      </label>
      {error && (
        <TextCP
          type={TextType.TEXT_14}
          color={error_color}
          overrideStyles={{ fontSize: 12 }}
        >
          {error}
        </TextCP>
      )}
    </UploaderContainer>
  );
};
