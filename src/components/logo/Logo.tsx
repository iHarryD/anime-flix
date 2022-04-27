import { StyledLogoContainer } from "../styled/Logo.styled";
import LogoImage from "../../assets/logo.svg";

export default function Logo() {
  return (
    <StyledLogoContainer>
      <img src={LogoImage} alt="logo" />
    </StyledLogoContainer>
  );
}
