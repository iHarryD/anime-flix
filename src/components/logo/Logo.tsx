import LogoImage from "../../assets/logo.svg";
import { StyledLogoContainer } from "../../styled";

export function Logo() {
  return (
    <StyledLogoContainer>
      <img src={LogoImage} alt="logo" />
    </StyledLogoContainer>
  );
}
