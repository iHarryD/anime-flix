import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo.svg";
import { StyledLogoContainer } from "../../styled";

export function Logo() {
  return (
    <Link to="/">
      <StyledLogoContainer>
        <img src={LogoImage} alt="logo" />
      </StyledLogoContainer>
    </Link>
  );
}
