import React, { PropsWithChildren } from "react";
import { TextCP, TextType } from "../text/text.component";
import { Button, IconContainer } from "./button.styles";

interface ButtonProps {
  secondary?: boolean;
  small?: boolean;
  ghost?: boolean;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export const ButtonCP: React.FC<PropsWithChildren<ButtonProps>> = ({
  secondary = false,
  small = false,
  ghost = false,
  icon,
  iconPosition = "left",
  onClick,
  style,
  disabled,
  children,
}) => {
  return (
    <Button
      secondary={secondary}
      small={small}
      ghost={ghost}
      iconPosition={iconPosition}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {icon && <IconContainer position={iconPosition}>{icon}</IconContainer>}
      <TextCP type={small ? TextType.TEXT_14 : TextType.TEXT_16}>
        {children}
      </TextCP>
    </Button>
  );
};
