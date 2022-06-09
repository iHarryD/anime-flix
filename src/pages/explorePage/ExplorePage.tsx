import { useEffect, useState } from "react";
import {
  PageContainerMain,
  VerticleVideoCard,
  VideoCardLoadingSkeleton,
} from "../../components";
import { ExploreVideosContainer } from "../../styled";
import { useVideos } from "../../contexts";
import { videoCardInterface } from "../../interfaces";
import { fetchAllVideos } from "../../services";
import { toast, ToastContainer } from "react-toastify";
import { getErrorMessage } from "../../helpers/getErrorMessage";
import { toastEmitterConfig } from "../../data/toastEmitterConfig";

export default function ExplorePage() {
  const { allVideos, setAllVideos } = useVideos();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (allVideos.length > 0) return;
    fetchAllVideos(
      setIsLoading,
      (result) => setAllVideos(result.data),
      (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
    );
  }, []);

  return (
    <>
      <ToastContainer />
      <PageContainerMain>
        <ExploreVideosContainer>
          {isLoading
            ? Array.from(Array(10)).map((item, index) => (
                <VideoCardLoadingSkeleton key={index} />
              ))
            : allVideos.map(
                ({ url, title, _id, uploadedOn }: videoCardInterface) => (
                  <VerticleVideoCard
                    key={_id}
                    url={url}
                    title={title}
                    _id={_id}
                    uploadedOn={uploadedOn}
                  />
                )
              )}
        </ExploreVideosContainer>
      </PageContainerMain>
    </>
  );
}
