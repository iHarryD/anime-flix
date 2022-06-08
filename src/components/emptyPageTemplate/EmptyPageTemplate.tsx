import { Link } from "react-router-dom";
import { EmptyPageContainer, EmptyPageText, PrimaryButton } from "../../styled";

export function EmptyPageTemplate() {
  return (
    <EmptyPageContainer>
      <EmptyPageText>There is nothing in here.</EmptyPageText>
      <Link to="/explore">
        <PrimaryButton>Explore</PrimaryButton>
      </Link>
    </EmptyPageContainer>
  );
}
