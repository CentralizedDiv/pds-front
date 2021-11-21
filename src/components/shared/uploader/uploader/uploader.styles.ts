import { black, blue } from "components/shared/colors";
import styled from "styled-components";

export const UploaderContainer = styled.div<{ isActive: boolean }>`
  border-radius: 16px;
  background-color: ${black};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  gap: 16px;

  border: 1px dashed ${({ isActive }) => (isActive ? "#ECECEC" : "transparent")};
  ${({ isActive }) => isActive && "box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);"}
  transition: border 0.3s ease-in-out;
`;

export const FileButton = styled.div`
  border-radius: 8px;
  padding: 0px 16px;
  background-color: ${blue};
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
