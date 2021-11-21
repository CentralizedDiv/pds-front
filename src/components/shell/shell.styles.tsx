import { black } from "components/shared/colors";
import styled from "styled-components";

export const ShellContainer = styled.div``;
export const ShellContent = styled.div<{ menuOpened: boolean }>`
  margin-left: ${({ menuOpened }) => (menuOpened ? 400 : 72) + "px"};
  transition: margin-left 0.2s ease-in-out;
  height: 100vh;
  background-color: ${black};
`;
