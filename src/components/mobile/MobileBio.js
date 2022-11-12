import styled from "styled-components";
import "../Bio.css";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Colors } from "../../content/colors";

const BioStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.grey};
  color: ${Colors.plat};
  font-size: 30px;
  justify-content: center;
  align-items: center;
  padding: 0 15% 10% 15%;
`;
const BioText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const ProfileImage = styled.img`
  margin-top: 105px;
  margin-bottom: 25px;
  width: 225px;
  height: 225px;

  border-radius: 160px;
  filter: drop-shadow(10px 5px 5px ${Colors.slate});
`;

const Title = styled.div`
  font-size: 35px;
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

const ResumeButton = styled.button`
  margin-top: 10px;
  width: 45%;
  text-decoration: none;
  background-color: ${Colors.slate};
  border: 1px solid ${Colors.blue};
  height: 55px;
  border-radius: 15px;
  color: white;
  &: hover {
    background-color: ${Colors.blue};
    transition: 0.3s ease-out;
    color: ${Colors.slate};
  }
`;

const ResumeLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: ${Colors.plat};
  margin-right: 5px;
  &: hover {
    color: ${Colors.slate};
    transition: 0.3s ease-out;
  }
`;

function MobileBio() {
  return (
    <BioStyle>
      <ProfileImage
        src="images/profile-pic.jpg"
        alt="Pixelated cartoon of Susannah"
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
            aria-label="Twitter Account"
            href="https://www.twitter.com/susannahcodes"
            target="_blank"
          >
            <FaTwitter className="changeColor" />
          </SocialLink>
          <SocialLink
            aria-label="LinkedIn Account"
            href="https://www.linkedin.com/in/susannahcodes"
            target="_blank"
          >
            <FaLinkedin className="changeColor" />
          </SocialLink>
          <SocialLink
            aria-label="Github Account"
            href="https://www.github.com/susannahcodes"
            target="_blank"
          >
            <FaGithub className="changeColor" />
          </SocialLink>
          <SocialLink
            aria-label="Open an Email to Susannah"
            href="mailto:susannahcodes@gmail.com"
          >
            <FaEnvelope className="changeColor" />
          </SocialLink>
        </Socials>
        <ResumeButton>
          <ResumeLink
            id="resume"
            aria-label="Open resume in new tab"
            href="https://docs.google.com/document/d/1JL2DDW9xMgGqjbAPj0sqHvxC6nLBiD2MXlNEg8bXVRQ/edit?usp=sharing"
            target="_blank"
          >
            📄Resume
          </ResumeLink>
        </ResumeButton>
      </BioText>
    </BioStyle>
  );
}

export default MobileBio;
