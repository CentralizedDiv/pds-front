import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export enum TextType {
  TITLE_48 = "TITLE_48",
  SUBTITLE_32 = "SUBTITLE_32",
  HEADING_24 = "HEADING_24",
  TEXT_16 = "TEXT_16",
  TEXT_14 = "TEXT_14",
}

interface TextProps {
  type?: TextType;
  color?: string;
  overrideStyles?: React.CSSProperties;
}

const Text = styled.span<{ size: string; weight: number; color: string }>`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

export const TextCP: React.FC<PropsWithChildren<TextProps>> = ({
  type = TextType.TEXT_16,
  color = "#ffffff",
  overrideStyles = {},
  children,
}) => {
  let size: string, weight: number;
  switch (type) {
    case TextType.TITLE_48:
      size = "48px";
      weight = 500;
      break;
    case TextType.SUBTITLE_32:
      size = "32px";
      weight = 500;
      break;
    case TextType.HEADING_24:
      size = "24px";
      weight = 400;
      break;
    case TextType.TEXT_14:
      size = "14px";
      weight = 400;
      break;
    default:
      size = "16px";
      weight = 300;
  }
  return (
    <Text size={size} weight={weight} color={color} style={overrideStyles}>
      {children}
    </Text>
  );
};
