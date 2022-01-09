import { black, text_secondary } from "components/shared/colors";
import styled from "styled-components";

export const PhotoContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
  padding: 0 4px;
  cursor: pointer;
`;
export const Photo = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 25%);
`;
export const PhotoNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;
export const PhotoFavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PreSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  border: 1px solid ${black};
  border-radius: 50%;
  cursor: pointer;
`;

export const SelectedPhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${text_secondary};
`;
