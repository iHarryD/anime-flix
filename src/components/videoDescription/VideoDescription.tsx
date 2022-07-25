import { useState } from "react";
import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import {
  BulletContainer,
  CenteredFlexJustifyBetween,
  DescriptionTextButton,
  DescriptionTextContainer,
  VerticleFlexWithGap,
  ViewUploadDateContainer,
} from "../../styled";
import { verticallyExpandingVariant } from "../../variants";
import { descriptionProps } from "../../interfaces";

export function VideoDescription({
  views,
  channel,
  uploadDate,
  description,
}: descriptionProps) {
  const [isShowingDescription, setIsShowingDescription] =
    useState<boolean>(false);
  return (
    <VerticleFlexWithGap>
      <CenteredFlexJustifyBetween>
        <div>
          <ViewUploadDateContainer>
            <span>{views.length} views</span>
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
    </VerticleFlexWithGap>
  );
}
