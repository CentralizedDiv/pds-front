import styled from "styled-components";
import { error } from "../colors";

const BadgeContainer = styled.div`
  position: relative;
`;
const BadgeCircle = styled.div<{ small: boolean }>`
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: ${error};
  border-radius: 8px;
  width: ${({ small }) => (small ? "10px" : "16px")};
  height: ${({ small }) => (small ? "10px" : "16px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default { BadgeCircle, BadgeContainer };
