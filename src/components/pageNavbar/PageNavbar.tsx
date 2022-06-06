import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faBookmark,
  faList,
  faClockRotateLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { PageNavItems, StyledPageNavbar } from "../styled/PageNavbar.styled";
import { Link } from "react-router-dom";

export default function PageNavbar() {
  return (
    <StyledPageNavbar>
      <div>
        <Link to="/explore">
          <PageNavItems title="Explore">
            <FontAwesomeIcon icon={faCompass} />
          </PageNavItems>
        </Link>
        <Link to="/playlists">
          <PageNavItems title="Playlists">
            <FontAwesomeIcon icon={faList} />
          </PageNavItems>
        </Link>
        <Link to="/history">
          <PageNavItems title="History">
            <FontAwesomeIcon icon={faClockRotateLeft} />
          </PageNavItems>
        </Link>
        <Link to="/watch-later">
          <PageNavItems title="Watch Later">
            <FontAwesomeIcon icon={faBookmark} />
          </PageNavItems>
        </Link>
      </div>
      <div>
        <Link to="/setting">
          <PageNavItems title="Setting">
            <FontAwesomeIcon icon={faGear} />
          </PageNavItems>
        </Link>
      </div>
    </StyledPageNavbar>
  );
}
