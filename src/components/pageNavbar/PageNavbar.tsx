import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faBookmark,
  faList,
  faClockRotateLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import {
  MobilePageNavItems,
  PageNavItems,
  StyledMobilePageNavbar,
  StyledPageNavbar,
} from "../../styled";
import useInMobileView from "../../hooks/useInMobileView";

export function PageNavbar() {
  const { inMobileView } = useInMobileView();

  return inMobileView ? (
    <StyledMobilePageNavbar>
      <MobilePageNavItems title="Setting" to="/setting">
        <FontAwesomeIcon icon={faGear} />
      </MobilePageNavItems>
      <MobilePageNavItems title="History" to="/history">
        <FontAwesomeIcon icon={faClockRotateLeft} />
      </MobilePageNavItems>
      <MobilePageNavItems title="Explore" to="/explore">
        <FontAwesomeIcon icon={faCompass} />
      </MobilePageNavItems>
      <MobilePageNavItems title="Watch Later" to="/watch-later">
        <FontAwesomeIcon icon={faBookmark} />
      </MobilePageNavItems>
      <MobilePageNavItems title="Playlists" to="/playlists">
        <FontAwesomeIcon icon={faList} />
      </MobilePageNavItems>
    </StyledMobilePageNavbar>
  ) : (
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
