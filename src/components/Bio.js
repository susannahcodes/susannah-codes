import styled from "styled-components";
import "./Bio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faBluesky } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { TypeAnimation } from "react-type-animation";
import { Colors } from "../content/colors";

const BioStyle = styled.div`
  display: flex;
  background-color: ${Colors.grey};
  color: ${Colors.plat};
  font-size: 30px;
  justify-content: center;
  align-items: center;
  padding: 150px;
  padding-top: 250px;
`;
const BioText = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  font-size: 25px;
`;

const ProfileImage = styled.img`
  margin-right: 100px;
  border-radius: 150px;
  filter: drop-shadow(10px 5px 5px ${Colors.slate});
`;

const Title = styled.div`
  font-size: 45px;
  font-family: "M PLUS Code Latin";
`;

const expYears = new Date().getFullYear() - 2018;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialLink = styled.a`
  padding-right: 15px;
`;

function Bio() {
  return (
    <BioStyle>
      <ProfileImage
        src="images/profile-pic.jpg"
        alt="pixelated cartoon depiction of susannah"
      />
      <BioText>
        <Title>
          <TypeAnimation
            sequence={["Hi there! I'm Susannah.", 2000]}
            cursor={false}
            repeat={Infinity}
          />
        </Title>
        <p>
          I'm a British-American video game UI programmer and front end web
          developer with {expYears} years of experience in AAA game development.
        </p>
        <div>
          I'm very passionate about UI/UX design and implementation and ensuring
          that all players have a positive user experience.
        </div>
        <br />
        <Socials>
          <SocialLink
            aria-label="LinkedIn Account"
            href="https://www.linkedin.com/in/susannahcodes"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="changeColor" />
          </SocialLink>
          <SocialLink
            aria-label="Github Account"
            href="https://www.github.com/susannahcodes"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} aGithub className="changeColor" />
          </SocialLink>
          <SocialLink
            aria-label="Open an Email to Susannah"
            href="mailto:susannah_hardin@pm.me"
          >
            <FontAwesomeIcon icon={faEnvelope} className="changeColor" />
          </SocialLink>
          <SocialLink
            aria-label="Bluesky"
            href="https://bsky.app/profile/susannah.codes"
            target="_blank"
          >
            <FontAwesomeIcon icon={faBluesky} className="changeColor" />
          </SocialLink>
        </Socials>
      </BioText>
    </BioStyle>
  );
}

export default Bio;
