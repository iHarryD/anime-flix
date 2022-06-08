import { Link } from "react-router-dom";
import { PrimaryButton } from "../styled/Buttons.styled";
import {
  EmptyPageContainer,
  EmptyPageText,
} from "../styled/EmptyPageComponents";

export default function EmptyPageTemplate() {
  return (
    <EmptyPageContainer>
      <EmptyPageText>There is nothing in here.</EmptyPageText>
      <Link to="/explore">
        <PrimaryButton>Explore</PrimaryButton>
      </Link>
    </EmptyPageContainer>
  );
}
