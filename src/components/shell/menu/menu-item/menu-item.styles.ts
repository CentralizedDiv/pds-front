import styled from "styled-components";

interface IProps {
  isSelected: boolean;
}

export const Button = styled.div<IProps>`
  background-color: ${({ isSelected }) => (isSelected ? "#2671e0" : "#1f1f1f")};
  cursor: pointer;
  height: 60px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: "flex-start";
  align-items: center;
  margin-bottom: 8px;
`;

export const MenuItemContent = styled.div`
  display: flex;
  width: 100%;
  margin-left: 18px;
  align-items: center;
  flex-direction: row;
`;

export const MenuItemName = styled.p`
  margin-left: 8px;
  padding: 0px 10px;
`;

export const HiddenIcon = styled.span`
  margin: 0 18px 0 auto;
`;
