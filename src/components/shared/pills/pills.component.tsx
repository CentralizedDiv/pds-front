import React from "react";
import { TextCP } from "../text/text.component";
import { Container, Pill } from "./pills.styles";

interface IPill {
  label: string;
  id: number;
}

interface PillsProps {
  data: Array<IPill>;
  selectedIds: number[];
  onClickPill?: (clickedPillId: number) => void;
}

export const PillsCP: React.FC<PillsProps> = ({
  data,
  selectedIds,
  onClickPill,
}) => {
  return (
    <Container>
      {data.map((pill) => (
        <Pill
          key={pill.id}
          selected={selectedIds.includes(pill.id)}
          onClick={() => onClickPill?.(pill.id)}
        >
          <TextCP>{pill.label}</TextCP>
        </Pill>
      ))}
    </Container>
  );
};
