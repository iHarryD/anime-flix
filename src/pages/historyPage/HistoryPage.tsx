import PageContainerMain from "../../components/pageContainer/PageContainer";
import PageHeading from "../../components/pageHeading/PageHeading";
import { TextButton } from "../../components/styled/Buttons.styled";
import { HistoryVideosContainer } from "../../components/styled/HistoryPageComponents.styled";

export default function HistoryPage() {
  return (
    <PageContainerMain>
      <PageHeading>
        <div>
          <h3>History</h3>
          <TextButton>Empty history</TextButton>
        </div>
      </PageHeading>
      <HistoryVideosContainer></HistoryVideosContainer>
    </PageContainerMain>
  );
}
