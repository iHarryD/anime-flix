import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchBarContainer, StyledNavbarSearchBar } from "../../styled";
import { useSearch } from "../../contexts/SearchContext";
import { ChangeEvent } from "react";

export function NavbarSearchBar() {
  const { searchQuery, setSearchQuery } = useSearch();
  return (
    <SearchBarContainer>
      <label htmlFor="navbar_search-bar">
        <FontAwesomeIcon icon={faSearch} />
      </label>
      <StyledNavbarSearchBar
        id="navbar_search-bar"
        value={searchQuery}
        placeholder="search by title, characters, cast, etc"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
      />
    </SearchBarContainer>
  );
}
