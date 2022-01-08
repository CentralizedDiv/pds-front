import { black } from "components/shared/colors";
import { ModalCP } from "components/shared/modal/modal.component";
import { TextCP } from "components/shared/text/text.component";
import React from "react";

interface CommentsModalProps {
  photographerName: string;
  isOpen: boolean;
  onCancel: () => void;
}

export const AfterPhotoSelectionModalCP: React.FC<CommentsModalProps> = ({
  photographerName,
  isOpen,
  onCancel,
}) => {
  return (
    <ModalCP isOpen={isOpen} onCancel={onCancel} title="Obrigado!">
      <TextCP color={black}>
        {photographerName} já recebeu sua seleção e irá te enviar o link para
        download assim que possível!
      </TextCP>
    </ModalCP>
  );
};
