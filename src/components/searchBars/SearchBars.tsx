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
import useDebounce from "../../hooks/useDebounce";

export function NavbarSearchBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<videoCardInterface[]>([]);
  const query = useDebounce(searchQuery, 500);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (query.length > 0) {
      fetchAllVideos(query, 1, setIsLoading, (result) => {
        setSearchResults(result.data.videos);
      });
    } else {
      setSearchResults([]);
    }
  }, [query]);

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
      {(searchResults.length > 0 || isLoading) && (
        <SearchItemsContainer>
          {isLoading ? (
            <SearchItem>Loading...</SearchItem>
          ) : (
            searchResults.map((video) => (
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
            ))
          )}
        </SearchItemsContainer>
      )}
    </SearchBarItemsContainer>
  );
}
