import React, { PropsWithChildren } from "react";
import ReactModal from "react-modal";
import { black, light_blue, white } from "../colors";
import { TextCP, TextType } from "../text/text.component";
import {
  Container,
  Content,
  Footer,
  FooterActionContainer,
  FooterActionIconContainer,
  TitleContainer,
} from "./modal.styles";

import { MdBlock, MdCheck, MdClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  title: string;
  cancelLabel?: string;
  okLabel?: string;
  okIcon?: JSX.Element;
  onCancel: () => void;
  onOk?: () => void;

  disabled?: boolean;
  withoutPadding?: boolean;

  dataTestId?: string;
}

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

export const ModalCP: React.FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  title,
  cancelLabel = "Voltar",
  okLabel,
  okIcon = <MdCheck size={16} color="#ffffff" />,
  onCancel,
  onOk,
  disabled = false,
  withoutPadding = false,
  dataTestId = "generic-modal",
  children,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className="modal-content"
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.85)",
        },
        content: {
          position: "absolute",
          border: "none",
          background: "#ECECEC",
          borderRadius: "16px",
          padding: 0,
          width: 500,
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
        },
      }}
    >
      <Container data-testid={dataTestId}>
        <TitleContainer>
          <TextCP color={black} type={TextType.SUBTITLE_32}>
            {title}
          </TextCP>
        </TitleContainer>
        <Content withoutPadding={withoutPadding}>{children}</Content>
        <Footer withoutPadding={withoutPadding}>
          <FooterActionContainer onClick={onCancel}>
            <FooterActionIconContainer>
              <MdClose size={16} color="#ffffff" />
            </FooterActionIconContainer>
            <TextCP>{cancelLabel}</TextCP>
          </FooterActionContainer>
          {okLabel && onOk && (
            <FooterActionContainer
              onClick={() => (disabled ? undefined : onOk())}
            >
              <TextCP color={disabled ? light_blue : white}>{okLabel}</TextCP>
              {disabled ? (
                <MdBlock size={20} color={light_blue} />
              ) : (
                <FooterActionIconContainer>{okIcon}</FooterActionIconContainer>
              )}
            </FooterActionContainer>
          )}
        </Footer>
      </Container>
    </ReactModal>
  );
};
