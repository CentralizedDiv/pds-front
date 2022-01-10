import styled from "styled-components";
import { blue } from "components/shared/colors";

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
  height: 60vh;
`;

export const AlbumCoverTitleContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const AlbumCoverName = styled.p`
  font-family: "Poppins", sans-serif;
  margin: 0.5em 0px;
  font-size: 96px;
  line-height: 16px;
  font-weight: 400;
  color: #ffffff;
`;

export const AlbumCoverAuthorContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const MainPhoto = styled.img`
  position: absolute;
  width: 100%;
  height: 60vh;
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
  cursor: pointer;
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
  width: 100%;
`;

export const FooterActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
  cursor: pointer;
  flex-direction: row;
  width: 100%;
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
  margin-left: 16px;
`;

export const FooterButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
