import Logo from "../logo/Logo";
import { LoggedOutNavbarUtitilies } from "../navbarUtilities/NavbarUtilities";
import { NavbarSearchBar } from "../searchBars/SearchBars";
import { StyledNavbar } from "../styled/Navbar.styled";

export default function Header() {
  return (
    <header>
      <StyledNavbar>
        <Logo />
        <NavbarSearchBar />
        <LoggedOutNavbarUtitilies />
      </StyledNavbar>
    </header>
  );
}
