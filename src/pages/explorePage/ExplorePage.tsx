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
import {
  PaginationButton,
  StyledPaginationBar,
} from "../../styled/PaginationBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSearch } from "../../contexts/SearchContext";

export default function ExplorePage() {
  const { allVideos, setAllVideos } = useVideos();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { searchQuery } = useSearch();
  const [paginationPages, setPaginationPages] = useState<{
    previousPage: number | null;
    nextPage: number | null;
    currentPage: number;
  }>({ previousPage: null, nextPage: null, currentPage: 1 });

  useEffect(() => {
    fetchAllVideos(
      searchQuery,
      paginationPages.currentPage,
      setIsLoading,
      (result) => {
        setAllVideos((prev) => result.data.videos);
        setPaginationPages((prev) => ({
          ...prev,
          currentPage: result.data.currentPage,
          nextPage: result.data.nextPage,
          previousPage:
            result.data.currentPage > 1 ? result.data.currentPage - 1 : null,
        }));
      },
      (err) => toast.error(getErrorMessage(err), toastEmitterConfig)
    );
  }, [paginationPages.currentPage, searchQuery]);

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
        <StyledPaginationBar>
          {paginationPages.previousPage && (
            <PaginationButton
              onClick={() =>
                setPaginationPages((prev) => ({
                  ...prev,
                  currentPage: prev.previousPage as number,
                }))
              }
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </PaginationButton>
          )}
          <PaginationButton>{paginationPages.currentPage}</PaginationButton>
          {paginationPages.nextPage && (
            <PaginationButton
              onClick={() =>
                setPaginationPages((prev) => ({
                  ...prev,
                  currentPage: prev.nextPage as number,
                }))
              }
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </PaginationButton>
          )}
        </StyledPaginationBar>
      </PageContainerMain>
    </>
  );
}
