import React from "react";
import { TextCP, TextType } from "../text/text.component";
import {
  AvatarBgImage,
  AvatarContainer,
  AvatarImageContainer,
} from "./avatar.styles";

interface AvatarProps {
  label: string;
  onClick: () => void;
  avatar: string;
  avatarType?: "emoji" | "image";
  reverse?: boolean;
}

export const AvatarCP: React.FC<AvatarProps> = ({
  label,
  onClick,
  avatar,
  avatarType = "emoji",
  reverse = false,
}) => {
  return (
    <AvatarContainer onClick={onClick} reverse={reverse}>
      <AvatarImageContainer>
        {avatarType === "emoji" ? (
          <TextCP type={TextType.HEADING_24}>{avatar}</TextCP>
        ) : (
          <AvatarBgImage url={avatar} />
        )}
      </AvatarImageContainer>
      <TextCP overrideStyles={{ fontWeight: 400 }}>{label}</TextCP>
    </AvatarContainer>
  );
};
