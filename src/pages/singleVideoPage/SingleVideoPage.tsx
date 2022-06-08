import { useParams } from "react-router-dom";
import { PageContainerMain, SingleVideo } from "../../components";

export default function SingleVideoPage() {
  const { videoID } = useParams() as { videoID: string };

  return (
    <PageContainerMain>
      <SingleVideo videoID={videoID} />
    </PageContainerMain>
  );
}
