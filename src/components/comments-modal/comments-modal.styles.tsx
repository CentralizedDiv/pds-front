import { black, text_secondary } from "components/shared/colors";
import styled from "styled-components";

export const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${text_secondary};

  margin: 0 24px;
`;

export const CommentsContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 12px 24px;

  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-right: 5px solid rgba(0, 0, 0, 0.1);
    background: transparent;
  }
`;

export const Comment = styled.div<{ side: "left" | "right" }>`
  border-radius: ${({ side }) =>
    side === "left" ? "0 8px 8px 8px" : "8px 0 8px 8px"};
  align-self: ${({ side }) => (side === "left" ? "flex-start" : "flex-end")};
  max-width: 80%;

  background-color: #c4c4c4;
  margin: 12px;
  position: relative;
  padding: 8px 12px;

  span {
    word-wrap: break-word;
    white-space: pre-wrap;
  }
`;

export const Tail = styled.div<{ side: "left" | "right" }>`
  position: absolute;
  background-color: inherit;
  transform: rotate(0deg) skewX(-30deg);
  top: 0px;

  ${({ side }) => (side === "left" ? `left: 0px;` : `right: -6px;`)}

  &,
  &::before,
  &::after {
    width: 12px;
    height: 12px;
    border-top-right-radius: 30%;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: inherit;
  }

  &::before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  &::after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 10px;
  background-color: #c4c4c4;
  margin: 0;

  label {
    width: 100%;
  }
`;

export const ContentEditableContainer = styled.div`
  background-color: ${black};
  padding: 10px;
  flex: 1;
  border-radius: 8px;
  position: relative;
  max-width: calc(100% - 60px);
`;

export const ContentEditable = styled.div`
  flex: 1 1 0%;

  max-height: 100px;
  max-width: 100%;

  font-size: 14px;
  line-height: 20px;

  outline: none;
  color: #fff;
  font-weight: 400;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-right: 5px solid rgba(255, 255, 255, 0.1);
    background: transparent;
  }
`;

export const ContentEditablePlaceholder = styled.div`
  display: flex;
  position: absolute;
  top: 12px;
  left: 10px;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
