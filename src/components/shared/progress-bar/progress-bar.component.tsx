import React from "react";
import { blue, light_background } from "../colors";
import {
  ProgressBarContainer,
  ProgressBarCurrent,
} from "./progress-bar.styles";

interface ProgressBarProps {
  total: number;
  current: number;
  containerColor?: string;
  currentColor?: string;
}

export const ProgressBarCP: React.FC<ProgressBarProps> = ({
  total,
  current,
  containerColor = light_background,
  currentColor = blue,
}) => {
  return (
    <ProgressBarContainer color={containerColor}>
      <ProgressBarCurrent
        width={Math.round((current * 100) / total)}
        color={currentColor}
      />
    </ProgressBarContainer>
  );
};
