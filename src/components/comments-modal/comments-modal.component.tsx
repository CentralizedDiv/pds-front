import { ModalCP } from "components/shared/modal/modal.component";
import { Comment } from "models/comment.model";
import React from "react";

export enum CommentsModalContext {
  ALBUM = "ALBUM",
  PHOTO = "PHOTO",
}

interface CommentsModalProps {
  comments: Comment[];
  context: CommentsModalContext;
  isOpen: boolean;
  onCancel: () => void;
  onSendMessage: (content: string) => void;
}

export const CommentsModalCP: React.FC<CommentsModalProps> = ({
  isOpen,
  onCancel,
}) => {
  return (
    <ModalCP isOpen={isOpen} onCancel={onCancel} title="Comentários">
      Modal de comentários
    </ModalCP>
  );
};
