import React, { PropsWithChildren } from "react";
import { TextCP, TextType } from "../text/text.component";
import { Button, IconContainer } from "./button.styles";

interface ButtonProps {
  small?: boolean;
  ghost?: boolean;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

export const ButtonCP: React.FC<PropsWithChildren<ButtonProps>> = ({
  small = false,
  ghost = false,
  icon,
  iconPosition = "left",
  onClick,
  children,
}) => {
  return (
    <Button
      small={small}
      ghost={ghost}
      iconPosition={iconPosition}
      onClick={onClick}
    >
      {icon && <IconContainer position={iconPosition}>{icon}</IconContainer>}
      <TextCP type={small ? TextType.TEXT_14 : TextType.TEXT_16}>
        {children}
      </TextCP>
    </Button>
  );
};
