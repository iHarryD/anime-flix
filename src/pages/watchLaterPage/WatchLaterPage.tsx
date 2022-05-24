import PageContainerMain from "../../components/pageContainer/PageContainer";
import PageHeading from "../../components/pageHeading/PageHeading";
import { HistoryVideosContainer } from "../../components/styled/HistoryPageComponents.styled";

export default function HistoryPage() {
  return (
    <PageContainerMain>
      <PageHeading>
        <h3>Watch Later</h3>
      </PageHeading>
      <HistoryVideosContainer></HistoryVideosContainer>
    </PageContainerMain>
  );
}
