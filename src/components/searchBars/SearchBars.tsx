import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  SearchBarContainer,
  StyledNavbarSearchBar,
} from "../styled/SearchBars.styled";

export function NavbarSearchBar() {
  return (
    <SearchBarContainer>
      <label htmlFor="navbar_search-bar">
        <FontAwesomeIcon icon={faSearch} />
      </label>
      <StyledNavbarSearchBar
        id="navbar_search-bar"
        placeholder="search by title, characters, cast, etc"
      />
    </SearchBarContainer>
  );
}
