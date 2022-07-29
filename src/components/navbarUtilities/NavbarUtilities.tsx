import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import {
  PrimaryButton,
  SecondaryButton,
  NavbarUtilitiesContainer,
} from "../../styled";
import useInMobileView from "../../hooks/useInMobileView";

export function LoggedOutNavbarUtitilies() {
  const navigate = useNavigate();
  const location = useLocation();
  const { inMobileView } = useInMobileView();
  return (
    <NavbarUtilitiesContainer gap="1rem">
      {inMobileView === false && (
        <SecondaryButton onClick={() => navigate("/signup")}>
          Sign up
        </SecondaryButton>
      )}
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
  return <SecondaryButton onClick={() => logout()}>Logout</SecondaryButton>;
}
