import styled from "styled-components";

export const InputPassContainer = styled.div`
  position: relative;
`;

export const GeneratePassword = styled.div`
  position: absolute;
  top: 4px;
  right: 0;
  display: flex;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  margin-bottom: 12px;
`;

export const CopiedContainer = styled.div<{ show: boolean }>`
  position: absolute;
  opacity: ${({ show }) => (show ? 1 : 0)};

  transition: opacity 0.3s ease-in-out;
`;

export const PhotosContainer = styled.div`
  display: grid;
  margin-top: 48px;
  grid-gap: 18px;
  grid-template-columns: repeat(3, 1fr);
`;
