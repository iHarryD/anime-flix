import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageContainerMain from "../../components/pageContainer/PageContainer";
import SingleVideo from "../../components/singleVideo/SingleVideo";

export default function SingleVideoPage() {
  const { videoID } = useParams();
  const [videoData, setVideoData] = useState<object>({});

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `http://127.0.0.1:3001/api/video/fetch?videoID=${videoID}`
      );
      // setVideoData(result.data);
    })();
  }, []);

  return (
    <PageContainerMain>
      <SingleVideo />
    </PageContainerMain>
  );
}
