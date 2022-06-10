import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  FooterCopyrightContainer,
  FooterCopyrightText,
  FooterFlixTItle,
  FooterSection,
  FooterSectionHeading,
  FooterSectionsLinks,
  FooterUpperSection,
  StyledFooter,
} from "../../styled";

export function Footer() {
  const linkWhileHover = { x: "10px" };
  return (
    <StyledFooter>
      <FooterUpperSection>
        <FooterSection>
          <FooterFlixTItle>Anime-flix</FooterFlixTItle>
          <p>AnimeFlix is a video library app dedicated to animes.</p>
        </FooterSection>
        <FooterSection>
          <FooterSectionHeading>Explore</FooterSectionHeading>
          <ul>
            <FooterSectionsLinks whileHover={linkWhileHover}>
              What's new?
            </FooterSectionsLinks>
            <FooterSectionsLinks whileHover={linkWhileHover}>
              Trending
            </FooterSectionsLinks>
            <FooterSectionsLinks whileHover={linkWhileHover}>
              Genres
            </FooterSectionsLinks>
          </ul>
        </FooterSection>
        <FooterSection>
          <FooterSectionHeading>Follow</FooterSectionHeading>
          <ul>
            <FooterSectionsLinks whileHover={linkWhileHover}>
              Instagram
            </FooterSectionsLinks>
            <FooterSectionsLinks whileHover={linkWhileHover}>
              Twitter
            </FooterSectionsLinks>
          </ul>
        </FooterSection>
        <FooterSection>
          <FooterSectionHeading>About Us</FooterSectionHeading>
          <ul>
            <FooterSectionsLinks whileHover={linkWhileHover}>
              Terms and Conditions
            </FooterSectionsLinks>
            <FooterSectionsLinks whileHover={linkWhileHover}>
              Our History
            </FooterSectionsLinks>
          </ul>
        </FooterSection>
        <FooterSection>
          <FooterSectionHeading>Helps</FooterSectionHeading>
          <ul>
            <FooterSectionsLinks whileHover={linkWhileHover}>
              FAQs
            </FooterSectionsLinks>
            <FooterSectionsLinks whileHover={linkWhileHover}>
              Contact Us
            </FooterSectionsLinks>
          </ul>
        </FooterSection>
      </FooterUpperSection>
      <FooterCopyrightContainer>
        <FontAwesomeIcon icon={faCopyright} />
        <FooterCopyrightText>2022. All rights reserved.</FooterCopyrightText>
      </FooterCopyrightContainer>
    </StyledFooter>
  );
}
