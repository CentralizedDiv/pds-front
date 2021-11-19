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
  height: 100vh;
  list-style: none;
  display: flex;
  // 400px - 60px - 48px (padding)
  width: ${({ open }) => 400 - 60 - (open ? 48 : 12) + "px"};
  padding-top: 60px;
  padding-left: 60px;
  padding-right: ${({ open }) => (open ? "48px" : "12px")};
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  position: fixed;
  border-right: 1px solid #3c3c3c;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
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
  margin-top: 24px;
`;
