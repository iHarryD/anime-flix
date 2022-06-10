import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faBookmark,
  faList,
  faClockRotateLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { PageNavItems, StyledPageNavbar } from "../../styled";

export function PageNavbar() {
  return (
    <StyledPageNavbar>
      <div>
        <PageNavItems title="Explore" to="/explore">
          <FontAwesomeIcon icon={faCompass} />
        </PageNavItems>

        <PageNavItems title="Playlists" to="/playlists">
          <FontAwesomeIcon icon={faList} />
        </PageNavItems>

        <PageNavItems title="History" to="/history">
          <FontAwesomeIcon icon={faClockRotateLeft} />
        </PageNavItems>

        <PageNavItems title="Watch Later" to="/watch-later">
          <FontAwesomeIcon icon={faBookmark} />
        </PageNavItems>
      </div>
      <div>
        <PageNavItems title="Setting" to="/setting">
          <FontAwesomeIcon icon={faGear} />
        </PageNavItems>
      </div>
    </StyledPageNavbar>
  );
}
