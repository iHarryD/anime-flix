import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { NavbarUtilitiesContainer } from "../styled/Navbar.styled";
import {
  IconOnlyButton,
  PrimaryButton,
  SecondaryButton,
} from "../styled/Buttons.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export function LoggedOutNavbarUtitilies() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <NavbarUtilitiesContainer gap="1rem">
      <SecondaryButton>Sign up</SecondaryButton>
      <PrimaryButton
        onClick={() =>
          navigate("/login", {
            state: {
              comingFrom: location.pathname,
            },
          })
        }
      >
        Login
      </PrimaryButton>
    </NavbarUtilitiesContainer>
  );
}

export function LoggedInNavbarUtitilies() {
  const { logout } = useAuth();
  return (
    <NavbarUtilitiesContainer gap="2rem">
      <IconOnlyButton size="1.5rem">
        <FontAwesomeIcon icon={faBell} />
      </IconOnlyButton>
      <SecondaryButton onClick={() => logout()}>Logout</SecondaryButton>
    </NavbarUtilitiesContainer>
  );
}
