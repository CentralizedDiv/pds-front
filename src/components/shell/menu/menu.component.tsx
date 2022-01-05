import { AvatarCP } from "components/shared/avatar/avatar.component";
import { text_secondary } from "components/shared/colors";
import { PopoverCP } from "components/shared/popover/popover.component";
import { TextCP, TextType } from "components/shared/text/text.component";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight, MdLogout } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { routeGroups } from "__config/routes";
import { MenuItemCP } from "./menu-item/menu-item.component";

import {
  MenuContainer,
  TitleContainer,
  Title,
  TitleButton,
  MenuContent,
  RouteGroupContainer,
  RoutesContainer,
  MenuAvatarContainer,
} from "./menu.styles";

interface MenuProps {
  isOpen: boolean;
  onClickTrigger: () => void;
}

export const MenuCP: React.FC<MenuProps> = ({ isOpen, onClickTrigger }) => {
  const location = useLocation();
  const [isPopoverOpened, setIsPopoverOpened] = useState(false);

  const [isOpenAfterTreansition, set] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      set(isOpen);
      // Menu transition is 200 ms
    }, 192);
  }, [isOpen]);

  return (
    <MenuContainer open={isOpen}>
      <TitleContainer align="flex-start">
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
      </TitleContainer>
      <MenuContent>
        {routeGroups.map((routeGroup, index) => {
          return (
            <RouteGroupContainer key={index}>
              <TextCP color={text_secondary}>{routeGroup.label}</TextCP>
              <RoutesContainer>
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
                          isMenuOpened={isOpenAfterTreansition}
                          isSelected={route.path === location.pathname}
                        />
                      </Link>
                    )
                )}
              </RoutesContainer>
            </RouteGroupContainer>
          );
        })}
        <MenuAvatarContainer isMenuOpened={isOpen}>
          <AvatarCP
            reverse={!isOpen}
            label="Lunares Fotografia"
            onClick={() => {}}
            avatar={"👩"}
          />
          <PopoverCP
            isOpen={isPopoverOpened}
            onConfirm={() => setIsPopoverOpened(false)}
            onCancel={() => setIsPopoverOpened(false)}
            onClickOutside={() => setIsPopoverOpened(false)}
            content={
              <TextCP type={TextType.TEXT_14}>
                Tem certeza que deseja sair?
              </TextCP>
            }
          >
            <TitleButton onClick={() => setIsPopoverOpened(!isPopoverOpened)}>
              <MdLogout color="#ffffff" size={24} />
            </TitleButton>
          </PopoverCP>
        </MenuAvatarContainer>
      </MenuContent>
    </MenuContainer>
  );
};
