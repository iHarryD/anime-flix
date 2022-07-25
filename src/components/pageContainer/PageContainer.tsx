import { PageNavbar } from "../../components";
import { PageSection, StyledPageContainerMain } from "../../styled";
import { containerProps } from "../../interfaces";
import useInMobileView from "../../hooks/useInMobileView";

export function PageContainerMain({ children }: containerProps) {
  const { inMobileView } = useInMobileView();
  return inMobileView ? (
    <>
      <main>{children}</main>
      <PageNavbar />
    </>
  ) : (
    <StyledPageContainerMain>
      <PageNavbar />
      <PageSection>{children}</PageSection>
    </StyledPageContainerMain>
  );
}
