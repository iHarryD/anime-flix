import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { NavbarUtilitiesContainer } from "../styled/Navbar.styled";
import {
  IconOnlyButton,
  PrimaryButton,
  SecondaryButton,
} from "../styled/Buttons.styled";

export function LoggedOutNavbarUtitilies() {
  return (
    <NavbarUtilitiesContainer gap="1rem">
      <SecondaryButton>Get Started</SecondaryButton>
      <PrimaryButton>Login</PrimaryButton>
    </NavbarUtilitiesContainer>
  );
}

export function LoggedInNavbarUtitilies() {
  return (
    <NavbarUtilitiesContainer gap="2rem">
      <IconOnlyButton size="1.5rem">
        <FontAwesomeIcon icon={faBell} />
      </IconOnlyButton>
    </NavbarUtilitiesContainer>
  );
}
