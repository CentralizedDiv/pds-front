import { useState } from "react";
import ChevronLeftLogo from "../../assets/chevron-left.svg";
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
          <img src={ChevronLeftLogo} />
        </TitleButton>
      </TitleContainer>
    </MenuContainer>
  );
};

export default Menu;
