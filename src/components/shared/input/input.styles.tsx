import styled from "styled-components";
import { black, light_background } from "../colors";

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  position: relative;
`;

export const Input = styled.input<{ large?: boolean; withIcon?: boolean }>`
  background-color: ${black};
  border-radius: 8px;
  color: #ffffff;
  height: ${({ large }) => (large ? 46 : 34)}px;
  outline: none;
  border: 1px solid ${black};
  padding: 0 10px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  ${({ withIcon }) => (withIcon ? "padding-left: 40px;" : "")}

  &:focus {
    border-color: #ffffff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const InputIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border-radius: 12px;

  background-color: ${light_background};

  position: absolute;
  bottom: 12px;
  left: 10px;
`;
