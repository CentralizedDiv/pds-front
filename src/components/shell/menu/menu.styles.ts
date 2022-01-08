import { black } from "components/shared/colors";
import styled from "styled-components";

interface IProps {
  open: boolean;
}

export const MenuContainer = styled.nav<IProps>`
  flex-flow: column wrap;
  background-color: ${black};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-328px)")};
  top: 0;
  left: 0;
  // 100vh - 60px - 60px (padding)
  height: calc(100vh - 120px);
  list-style: none;
  display: flex;
  // 400px - 60px - 48px (padding)
  width: ${({ open }) => 400 - 60 - (open ? 48 : 12) + "px"};
  padding: 60px;
  padding-right: ${({ open }) => (open ? "48px" : "12px")};
  transition: transform 0.2s ease-in-out, width 0.2s ease-in-out;
  position: fixed;
  border-right: 1px solid #3c3c3c;
`;

export const TitleContainer = styled.div<{
  align?: "center" | "flex-start";
  fullWidth?: boolean;
}>`
  display: flex;
  align-items: ${({ align = "center" }) => align};
  flex: ${({ fullWidth }) => (fullWidth ? 1 : 0)};
  justify-content: space-between;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 0;
  color: #ffffff;
`;

export const TitleButton = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MenuContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  overflow: auto;
`;

export const RouteGroupContainer = styled.div`
  margin-top: 24px;
`;

export const RoutesContainer = styled.div`
  margin-top: 24px;
`;

export const MenuAvatarContainer = styled.div<{ isMenuOpened: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 24px;
  ${({ isMenuOpened }) => !isMenuOpened && "flex-direction: row-reverse;"}
`;
