import { Link } from "react-router-dom";
import {
  VerticleCardContainer,
  VideoCardTextContainer,
  VideoHeading,
  VideoPreviewContainer,
  VideoTooltipButton,
  VideoUploadDate,
} from "../../styled";
import { videoCardInterface } from "../../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { VideoCardMenu } from "../videoCardMenu";
import { useState } from "react";
import { useAuth } from "../../contexts";

export function VerticleVideoCard({
  url,
  title,
  _id,
  thumbnail,
  uploadedOn,
}: videoCardInterface) {
  const [isVideoMenuActive, setIsVideoMenuActive] = useState<boolean>(false);
  const { userCredentials } = useAuth();
  return (
    <VerticleCardContainer>
      {isVideoMenuActive && <VideoCardMenu videoID={_id} />}
      <VideoPreviewContainer>
        {userCredentials && (
          <VideoTooltipButton
            onClick={() => setIsVideoMenuActive((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faEllipsisH} />
          </VideoTooltipButton>
        )}
        <Link to={`/watch/${_id}`}>
          <img src={thumbnail} alt={url} />
        </Link>
      </VideoPreviewContainer>
      <VideoCardTextContainer>
        <Link to={`/watch/${_id}`}>
          <VideoHeading title={title}>{title}</VideoHeading>
        </Link>
        <VideoUploadDate>
          {new Date(uploadedOn).toLocaleDateString()}
        </VideoUploadDate>
      </VideoCardTextContainer>
    </VerticleCardContainer>
  );
}
