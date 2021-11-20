import styled from "styled-components";

export const ProgressBarContainer = styled.div<{ color: string }>`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: ${({ color }) => color};
  border-radius: 16px;
`;

export const ProgressBarCurrent = styled.div<{ color: string; width: number }>`
  position: absolute;
  height: 10px;
  background-color: ${({ color }) => color};
  border-radius: 16px;
  width: ${({ width }) => width}%;
  transition: width 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
