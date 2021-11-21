import React, { PropsWithChildren } from "react";
import { TextCP } from "../text/text.component";
import Styled from "./badge.styles";

interface BadgeProps {
  content?: string;
}

export const BadgeCP: React.FC<PropsWithChildren<BadgeProps>> = ({
  children,
  content,
}) => {
  return (
    <Styled.BadgeContainer>
      <Styled.BadgeCircle small={!content}>
        <TextCP overrideStyles={{ fontSize: 12 }}>{content}</TextCP>
      </Styled.BadgeCircle>
      {children}
    </Styled.BadgeContainer>
  );
};
