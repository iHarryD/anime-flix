import { useAuth } from "../../contexts/authContext";
import Logo from "../logo/Logo";
import {
  LoggedInNavbarUtitilies,
  LoggedOutNavbarUtitilies,
} from "../navbarUtilities/NavbarUtilities";
import { NavbarSearchBar } from "../searchBars/SearchBars";
import { StyledNavbar } from "../styled/Navbar.styled";

export default function Header() {
  const { userData } = useAuth();
  return (
    <header>
      <StyledNavbar>
        <Logo />
        <NavbarSearchBar />
        {userData.firstName && userData.token ? (
          <LoggedInNavbarUtitilies />
        ) : (
          <LoggedOutNavbarUtitilies />
        )}
      </StyledNavbar>
    </header>
  );
}
