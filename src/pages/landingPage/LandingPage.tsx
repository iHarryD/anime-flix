import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import {
  IconOnlyButton,
  PrimaryButton,
} from "../../components/styled/Buttons.styled";
import {
  LandingPageForeground,
  LandingPageHeading,
  LandingPageTextContainer,
  LandingPageFooter,
  LandingPageContainer,
} from "../../components/styled/LandingPage.styled";
import VideoBackground from "../../components/videoBackground/VideoBackground";
import { motion } from "framer-motion";
import poster from "../../assets/landing-page-bg-poster.jpg";
import backgroundVideo from "../../assets/landing-page-bg-video.mp4";
import { Link } from "react-router-dom";
import {
  textVariant,
  footerVairant,
  footerButtonVairant,
} from "../../variants/landingPageVariants";

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <VideoBackground
        loop={true}
        autoPlay={true}
        videoSrc={backgroundVideo}
        videoType="video/mp4"
        videoPoster={poster}
      />
      <LandingPageForeground>
        <LandingPageTextContainer>
          <LandingPageHeading
            variants={textVariant}
            initial="initial"
            animate="animate"
          >
            Anime-flix
          </LandingPageHeading>
          <motion.p variants={textVariant} initial="initial" animate="animate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius
            soluta officiis nisi obcaecati maiores iste velit ducimus
            repudiandae. Recusandae repellendus possimus rem, molestias omnis
            animi perferendis ducimus dicta corrupti? Mollitia sint ad
            reprehenderit, accusamus eaque facilis necessitatibus veniam saepe
            iure nulla debitis adipisci ex voluptatum, exercitationem quos
            excepturi tempora voluptas libero voluptatem labore. Iste!
          </motion.p>
        </LandingPageTextContainer>
        <Link to="/explore">
          <PrimaryButton
            as={motion.button}
            variants={textVariant}
            initial="initial"
            animate="animate"
          >
            Explore
          </PrimaryButton>
        </Link>
      </LandingPageForeground>
      <LandingPageFooter
        variants={footerVairant}
        initial="initial"
        animate="animate"
      >
        <IconOnlyButton as={motion.button} variants={footerButtonVairant}>
          <FontAwesomeIcon icon={faGithub} />
        </IconOnlyButton>
        <IconOnlyButton as={motion.button} variants={footerButtonVairant}>
          <FontAwesomeIcon icon={faDiscord} />
        </IconOnlyButton>
        <IconOnlyButton as={motion.button} variants={footerButtonVairant}>
          <FontAwesomeIcon icon={faInstagram} />
        </IconOnlyButton>
      </LandingPageFooter>
    </LandingPageContainer>
  );
}
