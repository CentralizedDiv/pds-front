import { useState, useReducer } from "react";

import { FaChevronLeft, FaChevronRight, FaAddressCard } from "react-icons/fa";

import MenuItem from "./MenuItem";

import {
  MenuContainer,
  TitleContainer,
  Title,
  TitleButton,
  MenuContent,
} from "./styles";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState([true, false]);
  const forceUpdate = useReducer(() => ({}), {})[1] as () => void;

  const handleTitleButtonClick = () => {
    setOpen(!open);
  };

  const handleMenuClick = (index: number) => {
    const selectedMenuAux = selectedMenu;
    selectedMenuAux.forEach((open, i) => {
      if (i !== index) {
        selectedMenuAux[i] = false;
      } else {
        selectedMenuAux[i] = true;
      }
    });
    setSelectedMenu(selectedMenuAux);
    forceUpdate();
  };

  return (
    <MenuContainer open={open}>
      <TitleContainer>
        <Title>🌟 Seleto</Title>
        <TitleButton onClick={() => handleTitleButtonClick()}>
          {open ? <FaChevronLeft /> : <FaChevronRight />}
        </TitleButton>
      </TitleContainer>
      <MenuContent>
        <MenuItem
          itemName="Menu 1"
          icon={<FaAddressCard />}
          open={open}
          position={0}
          handleClickItem={handleMenuClick}
          isSelected={selectedMenu[0]}
        />
        <MenuItem
          itemName="Menu 2"
          icon={<FaAddressCard />}
          open={open}
          position={1}
          handleClickItem={handleMenuClick}
          isSelected={selectedMenu[1]}
        />
      </MenuContent>
    </MenuContainer>
  );
};

export default Menu;
