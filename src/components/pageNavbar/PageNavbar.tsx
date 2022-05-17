import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faBookmark,
  faList,
  faClockRotateLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { PageNavItems, StyledPageNavbar } from "../styled/PageNavbar.styled";

export default function PageNavbar() {
  return (
    <StyledPageNavbar>
      <div>
        <PageNavItems title="Explore">
          <FontAwesomeIcon icon={faCompass} />
        </PageNavItems>
        <PageNavItems title="Playlists">
          <FontAwesomeIcon icon={faList} />
        </PageNavItems>
        <PageNavItems title="History">
          <FontAwesomeIcon icon={faClockRotateLeft} />
        </PageNavItems>
        <PageNavItems title="Watch Later">
          <FontAwesomeIcon icon={faBookmark} />
        </PageNavItems>
      </div>
      <div>
        <PageNavItems title="Setting">
          <FontAwesomeIcon icon={faGear} />
        </PageNavItems>
      </div>
    </StyledPageNavbar>
  );
}
