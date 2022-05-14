import React from "react";
import PageNavbar from "../pageNavbar/PageNavbar";
import {
  PageSection,
  StyledPageContainerMain,
} from "../styled/PageContainer.styled";

interface ContainerProps {
  children: React.ReactNode;
}

export default function PageContainerMain({ children }: ContainerProps) {
  return (
    <StyledPageContainerMain>
      <PageNavbar />
      <PageSection>{children}</PageSection>
    </StyledPageContainerMain>
  );
}
