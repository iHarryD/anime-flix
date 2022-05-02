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
        <PageNavItems>
          <FontAwesomeIcon icon={faCompass} />
        </PageNavItems>
        <PageNavItems>
          <FontAwesomeIcon icon={faList} />
        </PageNavItems>
        <PageNavItems>
          <FontAwesomeIcon icon={faClockRotateLeft} />
        </PageNavItems>
        <PageNavItems>
          <FontAwesomeIcon icon={faBookmark} />
        </PageNavItems>
      </div>
      <div>
        <PageNavItems>
          <FontAwesomeIcon icon={faGear} />
        </PageNavItems>
      </div>
    </StyledPageNavbar>
  );
}