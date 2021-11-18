import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MenuContainer, TitleContainer, Title, TitleButton } from "./styles";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleTitleButtonClick = () => {
    setOpen(!open);
  };

  return (
    <MenuContainer open={open}>
      <TitleContainer>
        <Title>🌟 Seleto</Title>
        <TitleButton onClick={() => handleTitleButtonClick()}>
          {open ? <FaChevronLeft /> : <FaChevronRight />}
        </TitleButton>
      </TitleContainer>
    </MenuContainer>
  );
};

export default Menu;
