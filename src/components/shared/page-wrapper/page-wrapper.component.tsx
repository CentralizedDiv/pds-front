import { PropsWithChildren } from "react";
import { TextCP, TextType } from "../text/text.component";
import {
  PageWrapperContainer,
  PageWrapperContent,
  PageWrapperHeader,
} from "./page-wrapper.styles";

interface PageWrapperProps {
  title: string;
  headerRight?: JSX.Element;
}

export default function PageWrapper({
  title,
  headerRight,
  children,
}: PropsWithChildren<PageWrapperProps>) {
  return (
    <PageWrapperContainer>
      <PageWrapperHeader>
        <TextCP type={TextType.TITLE_48}>{title}</TextCP>
        {headerRight}
      </PageWrapperHeader>
      <PageWrapperContent>{children}</PageWrapperContent>
    </PageWrapperContainer>
  );
}
