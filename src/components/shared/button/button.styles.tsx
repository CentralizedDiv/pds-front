import styled from "styled-components";
import { blue, light_background, light_blue } from "../colors";

export const Button = styled.button<{
  ghost: boolean;
  small: boolean;
  secondary: boolean;
  iconPosition: "left" | "right";
}>`
  outline: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  border-radius: 8px;
  padding: 0px 16px;
  background-color: ${(props) =>
    props.disabled
      ? light_blue
      : props.secondary
      ? light_background
      : props.ghost
      ? "transparent"
      : blue};
  border: ${(props) => (props.ghost ? "1px solid #ffffff" : "none")};
  height: ${(props) => (props.small ? "32px" : "48px")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) =>
    props.iconPosition === "left" ? "row" : "row-reverse"};
`;

export const IconContainer = styled.span<{ position: "left" | "right" }>`
  margin: ${(props) =>
    props.position === "left" ? "0px 8px 0px 0px" : "0px 0px 0px 8px"};
`;

export const IconCircle = styled.div<{
  secondary?: boolean;
}>`
  background-color: ${(props) =>
    props.secondary ? light_background : light_blue};
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
