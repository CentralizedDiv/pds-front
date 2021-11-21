import styled from "styled-components";

interface IProps {
  isSelected: boolean;
  isMenuOpened: boolean;
}

export const Button = styled.div<IProps>`
  background-color: ${({ isSelected }) => (isSelected ? "#2671e0" : "#1f1f1f")};
  cursor: pointer;
  height: 60px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: ${({ isMenuOpened }) =>
    isMenuOpened ? "flex-end" : "flex-start"};
  align-items: center;
  margin-bottom: 8px;
`;

export const MenuItemContent = styled.div<{ isMenuOpened: boolean }>`
  display: flex;
  width: 100%;
  margin-left: 18px;
  align-items: center;
  flex-direction: ${({ isMenuOpened }) =>
    !isMenuOpened ? "row-reverse" : "row"};

  & svg {
    padding: ${({ isMenuOpened }) => (!isMenuOpened ? "0 12px 0px 24px" : "0")};
  }
`;

export const MenuItemName = styled.p`
  margin-left: 8px;
  padding: 0px 10px;
`;
