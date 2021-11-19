import styled from "styled-components";
import { blue, light_background } from "components/shared/colors";

interface PillProps {
  selected: boolean;
}

export const Pill = styled.div<PillProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: ${(props) => (props.selected ? blue : light_background)};
  border-radius: 16px;
  padding: 0px 16px;
  height: 32px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  gap: 16px;
`;
