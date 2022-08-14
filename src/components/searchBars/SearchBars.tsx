import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  IconOnlyButton,
  SearchBarContainer,
  SearchBarItemsContainer,
  SearchItem,
  SearchItemsContainer,
  StyledNavbarSearchBar,
} from "../../styled";
import { ChangeEvent, useEffect, useState } from "react";
import { fetchAllVideos } from "../../services";
import { videoCardInterface } from "../../interfaces";
import { useNavigate } from "react-router-dom";

export function NavbarSearchBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<videoCardInterface[]>([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchAllVideos(searchQuery, 1, undefined, (result) => {
        setSearchResults(result.data.videos);
      });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <SearchBarItemsContainer>
      <SearchBarContainer>
        <label htmlFor="navbar_search-bar">
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <StyledNavbarSearchBar
          id="navbar_search-bar"
          value={searchQuery}
          placeholder="search by title"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
        />
        <IconOnlyButton
          onClick={() => {
            setSearchQuery("");
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </IconOnlyButton>
      </SearchBarContainer>
      {searchResults.length > 0 && (
        <SearchItemsContainer>
          {searchResults.map((video) => (
            <SearchItem>
              <button
                onClick={() => {
                  navigate(`/watch/${video._id}`);
                  setSearchResults([]);
                }}
              >
                {video.title}
              </button>
            </SearchItem>
          ))}
        </SearchItemsContainer>
      )}
    </SearchBarItemsContainer>
  );
}
