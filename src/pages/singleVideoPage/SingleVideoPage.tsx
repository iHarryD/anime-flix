import { useParams } from "react-router-dom";
import PageContainerMain from "../../components/pageContainer/PageContainer";
import SingleVideo from "../../components/singleVideo/SingleVideo";

export default function SingleVideoPage() {
  const { videoID } = useParams() as { videoID: string };

  return (
    <PageContainerMain>
      <SingleVideo videoID={videoID} />
    </PageContainerMain>
  );
}
