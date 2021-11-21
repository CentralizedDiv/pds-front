import { black } from "components/shared/colors";
import styled from "styled-components";

const FileListItemContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;
const FileListItemPreview = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});

  width: 60px;
  height: 60px;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
`;
const FileListItemProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;
const FileListItemNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FileListItemIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border: 1px solid ${black};
  border-radius: 12px;

  cursor: pointer;
`;
const FileListItemUploadedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default {
  FileListItemContainer,
  FileListItemPreview,
  FileListItemProgressContainer,
  FileListItemNameContainer,
  FileListItemIconContainer,
  FileListItemUploadedContainer,
};
