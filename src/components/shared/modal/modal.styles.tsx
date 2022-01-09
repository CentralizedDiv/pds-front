import styled from "styled-components";
import { blue } from "../colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 12px;
`;

export const Footer = styled.div`
  height: 56px;
  padding: 0 16px;
  border-radius: 0 0 16px 16px;
  background-color: ${blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px -24px -24px;
`;

export const Content = styled.div`
  overflow: auto;
  flex: 1;
  max-height: calc(100vh - 170px);

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const FooterActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const FooterActionIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid #ffffff;
`;
