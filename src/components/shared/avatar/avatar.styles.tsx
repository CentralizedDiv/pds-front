import styled from "styled-components";
import { light_background } from "../colors";

export const AvatarContainer = styled.div<{ reverse: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  ${({ reverse }) => reverse && "flex-direction: row-reverse;"}
`;

export const AvatarImageContainer = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: ${light_background};
`;

export const AvatarBgImage = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  width: 48px;
  height: 48px;
  background-position: center;
  background-size: cover;
  border-radius: 16px;
`;
