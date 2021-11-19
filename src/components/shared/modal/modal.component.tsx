import React, { PropsWithChildren } from "react";
import ReactModal from "react-modal";
import { black } from "../colors";
import { TextCP, TextType } from "../text/text.component";
import {
  Container,
  Content,
  Footer,
  FooterActionContainer,
  FooterActionIconContainer,
  TitleContainer,
} from "./modal.styles";

import { MdCheck, MdClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  title: string;
  cancelLabel?: string;
  okLabel?: string;
  onCancel: () => void;
  onOk?: () => void;
}

ReactModal.setAppElement("#root");

const overlayStyles = {
  backgroundColor: "rgba(0,0,0,0.85)",
};

const contentStyles = {
  border: "none",
  background: "#ECECEC",
  width: "500px",
  height: "600px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "16px",
  padding: 0,
};

export const ModalCP: React.FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  title,
  cancelLabel = "Voltar",
  okLabel,
  onCancel,
  onOk,
  children,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{ overlay: overlayStyles, content: contentStyles }}
    >
      <Container>
        <TitleContainer>
          <TextCP color={black} type={TextType.SUBTITLE_32}>
            {title}
          </TextCP>
        </TitleContainer>
        <Content>{children}</Content>
        <Footer>
          <FooterActionContainer onClick={onCancel}>
            <FooterActionIconContainer>
              <MdClose size={16} color="#ffffff" />
            </FooterActionIconContainer>
            <TextCP>{cancelLabel}</TextCP>
          </FooterActionContainer>
          {okLabel && onOk && (
            <FooterActionContainer onClick={onOk}>
              <TextCP>{okLabel}</TextCP>
              <FooterActionIconContainer>
                <MdCheck size={16} color="#ffffff" />
              </FooterActionIconContainer>
            </FooterActionContainer>
          )}
        </Footer>
      </Container>
    </ReactModal>
  );
};
