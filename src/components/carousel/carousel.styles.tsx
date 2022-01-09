import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const MainContainer = styled(Container)`
  padding: 0 60px;
  position: relative;
`;

export const ArrowContainer = styled(Container)<{ disabled?: boolean }>`
  height: auto;
  cursor: ${({ disabled }) => (disabled ? "unset" : "pointer")};
`;

export const PhotoContainer = styled(Container)`
  flex: 1;
  flex-direction: column;
  margin: 0 24px;
`;

export const Photo = styled.img`
  height: 70%;
  width: auto;
`;

export const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  margin-bottom: 24px;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;

export const CommentActionContainer = styled(ActionContainer)`
  flex: 1;
`;

export const IndicatorContainer = styled.div`
  margin-top: 16px;
`;

export const CloseContainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: 12px;
  left: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
