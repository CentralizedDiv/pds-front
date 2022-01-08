import styled from "styled-components";

export const PhotoCardContainer = styled.div<{ url: string }>`
  position: relative;

  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;

  border-radius: 16px;
  min-height: 279px;
`;

export const PhotoFavIcon = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const PhotoOptions = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;

  background-color: rgba(31, 31, 31, 0.6);
  width: 48px;
  height: 48px;
`;

export const PhotoName = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;

  gap: 8px;
  display: flex;
  flex-direction: column;
`;
