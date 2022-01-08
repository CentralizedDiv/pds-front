import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  position: relative;
`;

export const AlbumImage = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 100%;
`;

export const AlbumInfoContent = styled.div`
  position: absolute;
  bottom: 8px;
  left: 24px;
`;

export const AlbumNameContent = styled.div`
  margin-top: 12px;
`;
