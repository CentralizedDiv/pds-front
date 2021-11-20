import {
  text_secondary,
  error as error_color,
  success as success_color,
  black,
} from "components/shared/colors";
import { ProgressBarCP } from "components/shared/progress-bar/progress-bar.component";
import { TextCP, TextType } from "components/shared/text/text.component";
import React from "react";
import { MdCheck, MdClose } from "react-icons/md";
import Styled from "./file-list-item.styles";

interface FileListItemProps {
  url: string;
  name: string;
  progress: number;
  error: true | null;
  success: true | null;
  onDelete: () => void;
}

export const FileListItemCP: React.FC<FileListItemProps> = ({
  url,
  name,
  progress,
  error,
  success,
  onDelete,
}) => {
  return (
    <Styled.FileListItemContainer>
      <Styled.FileListItemPreview url={url} />
      <Styled.FileListItemProgressContainer>
        <Styled.FileListItemNameContainer>
          <TextCP color={black}>{name}</TextCP>
          {!error && !success && (
            <TextCP color={text_secondary}>{progress}%</TextCP>
          )}
        </Styled.FileListItemNameContainer>
        {!error && !success && (
          <ProgressBarCP
            current={progress}
            total={100}
            currentColor={black}
            containerColor={"rgba(31,31,31,0.2)"}
          />
        )}
        <Styled.FileListItemUploadedContainer>
          {error && (
            <TextCP overrideStyles={{ fontSize: 12 }} color={text_secondary}>
              Algo de errado aconteceu, tente fazer o upload novamente
            </TextCP>
          )}
          <div
            onClick={onDelete}
            style={{
              display: "inherit",
              cursor: "pointer",
            }}
          >
            <TextCP
              color={error_color}
              type={TextType.TEXT_14}
              overrideStyles={{
                textDecoration: "underline",
                fontSize: 12,
              }}
            >
              Excluir
            </TextCP>
          </div>
        </Styled.FileListItemUploadedContainer>
      </Styled.FileListItemProgressContainer>
      {error && <MdClose size={24} color={error_color} />}
      {success && <MdCheck size={24} color={"#1a9b5d"} />}
      {!error && !success && (
        <Styled.FileListItemIconContainer onClick={onDelete}>
          <MdClose size={14} color={black} />
        </Styled.FileListItemIconContainer>
      )}
    </Styled.FileListItemContainer>
  );
};
