import { PageNavbar } from "../../components";
import { PageSection, StyledPageContainerMain } from "../../styled";
import { containerProps } from "../../interfaces";

export function PageContainerMain({ children }: containerProps) {
  return (
    <StyledPageContainerMain>
      <PageNavbar />
      <PageSection>{children}</PageSection>
    </StyledPageContainerMain>
  );
}
