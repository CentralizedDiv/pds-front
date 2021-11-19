import styled from "styled-components";

interface IProps {
  isSelected: boolean;
  open: boolean;
}

export const Button = styled.div<IProps>`
  background-color: ${({ isSelected }) => (isSelected ? "#2671e0" : "#1f1f1f")};
  cursor: pointer;
  height: 60px;
  border-radius: 8px;
  width: 100%;
  display: ${({ open }) => (open ? "flex" : "none")};
  align-items: center;
  margin-bottom: 8px;
`;

export const MenuItemContent = styled.div`
  display: flex;
  width: 100%;
  margin-left: 18px;
  align-items: center;
`;

export const MenuItemName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  margin-left: 8px;
  padding: 0px 10px;
`;
