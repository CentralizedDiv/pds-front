import { text_secondary } from "components/shared/colors";
import { TextCP } from "components/shared/text/text.component";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { routeGroups } from "__config/routes";
import { MenuItemCP } from "./menu-item/menu-item.component";

import {
  MenuContainer,
  TitleContainer,
  Title,
  TitleButton,
  MenuContent,
} from "./menu.styles";

interface MenuProps {
  isOpen: boolean;
  onClickTrigger: () => void;
}

export const MenuCP: React.FC<MenuProps> = ({ isOpen, onClickTrigger }) => {
  const location = useLocation();

  return (
    <MenuContainer open={isOpen}>
      <TitleContainer>
        <Title>🌟 Seleto</Title>
        <TitleButton onClick={onClickTrigger}>
          {isOpen ? (
            <MdChevronLeft size={36} color="#ffffff" />
          ) : (
            <MdChevronRight size={36} color="#ffffff" />
          )}
        </TitleButton>
      </TitleContainer>
      <MenuContent>
        {routeGroups.map((routeGroup, index) => {
          return (
            <div key={index} style={{ marginTop: 60 }}>
              <TextCP color={text_secondary}>{routeGroup.label}</TextCP>
              <div style={{ marginTop: 24 }}>
                {routeGroup.routes.map(
                  (route) =>
                    route.icon &&
                    route.label && (
                      <Link
                        key={route.path}
                        to={route.path}
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItemCP
                          label={route.label}
                          icon={route.icon}
                          isMenuOpened={isOpen}
                          isSelected={route.path === location.pathname}
                        />
                      </Link>
                    )
                )}
              </div>
            </div>
          );
        })}
      </MenuContent>
    </MenuContainer>
  );
};
