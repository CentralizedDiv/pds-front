import { TextCP } from "components/shared/text/text.component";

import { Button, MenuItemContent, MenuItemName } from "./menu-item.styles";

interface IProps {
  label: string;
  icon: JSX.Element;
  isMenuOpened: boolean;
  isSelected: boolean;
}

export const MenuItemCP = ({
  label,
  icon,
  isMenuOpened,
  isSelected,
}: IProps) => {
  return (
    <Button isMenuOpened={isMenuOpened} isSelected={isSelected}>
      <MenuItemContent isMenuOpened={isMenuOpened}>
        {icon}
        <MenuItemName>
          <TextCP>{label}</TextCP>
        </MenuItemName>
      </MenuItemContent>
    </Button>
  );
};
