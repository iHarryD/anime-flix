import { useAuth } from "../../contexts";
import {
  LoggedInNavbarUtitilies,
  LoggedOutNavbarUtitilies,
  Logo,
  NavbarSearchBar,
} from "../../components";
import { StyledNavbar } from "../../styled";

export function Header() {
  const { userCredentials } = useAuth();
  return (
    <header>
      <StyledNavbar>
        <Logo />
        <NavbarSearchBar />
        {userCredentials ? (
          <LoggedInNavbarUtitilies />
        ) : (
          <LoggedOutNavbarUtitilies />
        )}
      </StyledNavbar>
    </header>
  );
}
