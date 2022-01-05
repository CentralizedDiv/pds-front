import { TextCP } from "components/shared/text/text.component";
import {
  Button,
  HiddenIcon,
  MenuItemContent,
  MenuItemName,
} from "./menu-item.styles";

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
    <Button isSelected={isSelected}>
      <MenuItemContent>
        {icon}
        <MenuItemName>
          <TextCP>{label}</TextCP>
        </MenuItemName>
        {!isMenuOpened && <HiddenIcon>{icon}</HiddenIcon>}
      </MenuItemContent>
    </Button>
  );
};
