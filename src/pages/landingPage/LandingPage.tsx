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
import { motion, Variants } from "framer-motion";
import poster from "../../assets/landing-page-bg-poster.jpg";
import backgroundVideo from "../../assets/landing-page-bg-video.mp4";

export default function LandingPage() {
  const textAnimationDelay: number = 0.5;
  const textAnimationDuration: number = 1;

  const textVariant: Variants = {
    initial: {
      x: "-100vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: textAnimationDelay,
        duration: textAnimationDuration,
      },
    },
  };

  const footerVairant: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: textAnimationDelay + textAnimationDuration,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const footerButtonVairant: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

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
        <PrimaryButton
          as={motion.button}
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          Hop In
        </PrimaryButton>
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
