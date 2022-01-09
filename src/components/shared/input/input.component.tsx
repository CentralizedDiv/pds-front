import React, { InputHTMLAttributes } from "react";
import { black } from "../colors";
import { TextCP } from "../text/text.component";
import { Input, InputContainer, InputIconContainer } from "./input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  large?: boolean;
  icon?: JSX.Element;
}

export const InputCP = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, large = false, icon, style, ...props }: InputProps, ref) => {
    return (
      <InputContainer style={style} htmlFor={id}>
        {label && (
          <TextCP color={black} overrideStyles={{ fontWeight: 400 }}>
            {label}
          </TextCP>
        )}
        <Input id={id} {...props} ref={ref} large={large} withIcon={!!icon} />
        {icon && <InputIconContainer>{icon}</InputIconContainer>}
      </InputContainer>
    );
  }
);
InputCP.displayName = "InputCP";
