import React, { InputHTMLAttributes } from "react";
import { black } from "../colors";
import { TextCP } from "../text/text.component";
import { Input, InputContainer } from "./input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const InputCP = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, style, ...props }: InputProps, ref) => {
    return (
      <InputContainer style={style} htmlFor={id}>
        <TextCP color={black} overrideStyles={{ fontWeight: 400 }}>
          {label}
        </TextCP>
        <Input id={id} {...props} ref={ref} />
      </InputContainer>
    );
  }
);
InputCP.displayName = "InputCP";
