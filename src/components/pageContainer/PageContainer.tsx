import PageNavbar from "../pageNavbar/PageNavbar";
import {
  PageSection,
  StyledPageContainerMain,
} from "../styled/PageContainer.styled";
import { containerProps } from "../../interfaces/pageContainer.interface";

export default function PageContainerMain({ children }: containerProps) {
  return (
    <StyledPageContainerMain>
      <PageNavbar />
      <PageSection>{children}</PageSection>
    </StyledPageContainerMain>
  );
}
