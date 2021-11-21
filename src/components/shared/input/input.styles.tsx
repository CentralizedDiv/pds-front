import styled from "styled-components";
import { black } from "../colors";

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  background-color: ${black};
  border-radius: 8px;
  color: #ffffff;
  height: 34px;
  outline: none;
  border: 1px solid ${black};
  padding: 0 10px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;

  &:focus {
    border-color: #ffffff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  }
`;
