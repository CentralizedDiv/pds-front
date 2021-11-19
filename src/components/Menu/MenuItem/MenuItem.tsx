import { Button, MenuItemContent, MenuItemName } from "./styles";

interface IProps {
  itemName: string;
  icon: any;
  open: boolean;
  position: number;
  handleClickItem: (index: number) => void;
  isSelected: boolean;
}

const Menu = ({
  itemName,
  icon,
  open,
  position,
  handleClickItem,
  isSelected,
}: IProps) => {
  return (
    <Button
      open={open}
      isSelected={isSelected}
      onClick={() => handleClickItem(position)}
    >
      <MenuItemContent>
        {icon}
        <MenuItemName>{itemName}</MenuItemName>
      </MenuItemContent>
    </Button>
  );
};

export default Menu;
