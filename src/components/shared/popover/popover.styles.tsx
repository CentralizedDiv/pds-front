import styled from "styled-components";
import { blue } from "../colors";

export const PopoverContent = styled.div`
  padding: 12px;
  background-color: rgb(54 54 54);
  border-radius: 8px;
`;

export const PopoverContentActionsContainer = styled.div`
  background-color: ${blue};
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 12px -12px -12px;
  padding: 8px 12px;
  border-radius: 0 0 8px 8px;
`;

export const PopoverContentAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

export const PopoverContentActionIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 12px;
  border: 1px solid #ffffff;
`;
