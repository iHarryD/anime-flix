import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageContainerMain from "../../components/pageContainer/PageContainer";
import PageHeading from "../../components/pageHeading/PageHeading";
import { IconOnlyButton } from "../../components/styled/Buttons.styled";
import {
  HistoryHeadingButtonContainer,
  HistoryVideosContainer,
} from "../../components/styled/HistoryPageComponents.styled";

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
