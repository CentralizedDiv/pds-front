import React, { PropsWithChildren } from "react";
import { MdClose, MdCheck } from "react-icons/md";
import { Popover, ArrowContainer } from "react-tiny-popover";
import { TextCP, TextType } from "../text/text.component";
import {
  PopoverContent,
  PopoverContentActionsContainer,
  PopoverContentAction,
  PopoverContentActionIconContainer,
} from "./popover.styles";

interface PopoverProps {
  isOpen: boolean;
  onClickOutside: () => void;
  content: JSX.Element;
  showConfirm?: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const PopoverCP: React.FC<PropsWithChildren<PopoverProps>> = ({
  isOpen,
  content,
  showConfirm = true,
  confirmText = "Sim",
  cancelText = "Não",
  onCancel,
  onConfirm,
  onClickOutside,
  children,
}) => {
  return (
    <Popover
      isOpen={isOpen}
      positions={["right", "top", "left", "bottom"]}
      align="start"
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor="rgb(54 54 54)"
          arrowSize={6}
        >
          <PopoverContent>
            {content}
            {showConfirm && (
              <PopoverContentActionsContainer>
                <PopoverContentAction onClick={onCancel}>
                  <PopoverContentActionIconContainer>
                    <MdClose size={12} color="#ffffff" />
                  </PopoverContentActionIconContainer>
                  <TextCP type={TextType.TEXT_14}>{cancelText}</TextCP>
                </PopoverContentAction>
                <PopoverContentAction onClick={onConfirm}>
                  <TextCP type={TextType.TEXT_14}>{confirmText}</TextCP>
                  <PopoverContentActionIconContainer>
                    <MdCheck size={12} color="#ffffff" />
                  </PopoverContentActionIconContainer>
                </PopoverContentAction>
              </PopoverContentActionsContainer>
            )}
          </PopoverContent>
        </ArrowContainer>
      )}
      onClickOutside={onClickOutside}
      padding={6}
    >
      {children as JSX.Element}
    </Popover>
  );
};
