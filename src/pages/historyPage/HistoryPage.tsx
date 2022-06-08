import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageContainerMain, PageHeading } from "../../components";
import {
  HistoryHeadingButtonContainer,
  HistoryVideosContainer,
  IconOnlyButton,
} from "../../styled";

export default function HistoryPage() {
  return (
    <PageContainerMain>
      <PageHeading>
        <HistoryHeadingButtonContainer>
          History
          <IconOnlyButton title="Clear history">
            <FontAwesomeIcon icon={faTrash} />
          </IconOnlyButton>
        </HistoryHeadingButtonContainer>
      </PageHeading>
      <HistoryVideosContainer></HistoryVideosContainer>
    </PageContainerMain>
  );
}
