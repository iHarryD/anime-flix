import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BulletContainer,
  CenteredFlexJustifyBetween,
  DescriptionTextButton,
  DescriptionTextContainer,
  ViewUploadDateContainer,
} from "../styled/SingleVideoComponents.styled";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { verticallyExpandingVariant } from "../../variants/expandingVariant";
import { descriptionProps } from "../../interfaces/videoDescription.interface";

export default function VideoDescription({
  viewCount,
  channel,
  uploadDate,
  description,
}: descriptionProps) {
  const [isShowingDescription, setIsShowingDescription] =
    useState<boolean>(false);
  return (
    <div>
      <CenteredFlexJustifyBetween>
        <div>
          <ViewUploadDateContainer>
            <span>{viewCount} views</span>
            <BulletContainer>
              <FontAwesomeIcon icon={faCircle} />
            </BulletContainer>
            <span>{new Date(uploadDate).toLocaleDateString()}</span>
          </ViewUploadDateContainer>
        </div>
        <div>Uploaded by {channel}</div>
      </CenteredFlexJustifyBetween>
      <div>
        <DescriptionTextButton
          onClick={() => setIsShowingDescription(!isShowingDescription)}
        >
          <p>Click to exand description</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </DescriptionTextButton>
      </div>
      <DescriptionTextContainer>
        <AnimatePresence>
          {isShowingDescription && (
            <motion.div
              variants={verticallyExpandingVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {description ? description : "No description available."}
            </motion.div>
          )}
        </AnimatePresence>
      </DescriptionTextContainer>
    </div>
  );
}
