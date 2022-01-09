import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainPhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  height: 40vh;
`;

export const MainPhoto = styled.img`
  position: absolute;
  width: 100%;
  height: 40vh;
  object-fit: cover;
  z-index: -1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 60px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const PhotosGrid = styled.div`
  display: grid;
  margin-top: 38px;
  grid-gap: 18px;
  @media (min-width: 0px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PhotoContainer = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 500px;
  cursor: pointer;
`;
