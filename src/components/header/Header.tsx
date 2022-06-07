import { useAuth } from "../../contexts/authContext";
import Logo from "../logo/Logo";
import {
  LoggedInNavbarUtitilies,
  LoggedOutNavbarUtitilies,
} from "../navbarUtilities/NavbarUtilities";
import { NavbarSearchBar } from "../searchBars/SearchBars";
import { StyledNavbar } from "../styled/Navbar.styled";

export default function Header() {
  const { userCredentials } = useAuth();
  return (
    <header>
      <StyledNavbar>
        <Logo />
        <NavbarSearchBar />
        {userCredentials.firstName && userCredentials.token ? (
          <LoggedInNavbarUtitilies />
        ) : (
          <LoggedOutNavbarUtitilies />
        )}
      </StyledNavbar>
    </header>
  );
}
