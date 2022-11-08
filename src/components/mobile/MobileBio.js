import styled from "styled-components";
import "../Bio.css"
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const BioStyle = styled.div`
display: flex;
flex-direction: column;
background-color: #4f4f4f;
color: #E7E5DF;
font-size: 30px;
justify-content: center;
align-items: center;
padding-left: 15%;
padding-right: 15%;
padding-bottom: 10%;
`
const BioText = styled.div`
display: flex;
flex-direction: column;
font-size: 20px;
`

const ProfileImage = styled.img`
margin-top: 105px;
margin-bottom: 25px;
width: 225px;
height: 225px;

    border-radius: 160px;
    filter: drop-shadow(10px 5px 5px #2A2A2A);
`

const Title = styled.div`
    font-size: 35px;
    font-family: 'M PLUS Code Latin';
`

const expYears = new Date().getFullYear() - 2018;

const Socials = styled.div`
    display: flex;
    flex-direction: row;
`

const SocialLink = styled.a`
    padding-right: 15px;
`

const ResumeButton = styled.button`
margin-top: 10px;
width: 45%;
    text-decoration: none;
    background-color: #2A2A2A;
    border: 1px solid #7298D7;
    height: 55px;
    border-radius: 15px;
    color: white;
    &: hover {
        background-color: #7298D7;
        transition: 0.3s ease-out;
        color: #2A2A2A;
    }
`

const ResumeLink = styled.a`
    text-decoration: none;
    font-size: 20px;
    color: #E7E5DF;
    margin-right: 5px;
    &: hover {
        color: #2A2A2A;
        transition: 0.3s ease-out;
    }
`

function MobileBio() {
    return (
        <BioStyle>
            <ProfileImage src="images/profile-pic.jpg" alt="pixelated cartoon depiction of susannah" />
            <BioText>
                <Title>
                    <TypeAnimation
                        sequence={[
                            "Hi there! I'm Susannah.", 2000
                        ]}
                        cursor={true}
                        repeat={Infinity}
                    />
                </Title>
                <p>I'm a British-American video game UI programmer and front end web developer with {expYears} years of experience in AAA game development.</p>
                <div>I'm very passionate about UI/UX design and implementation and ensuring that all players have a positive user experience.</div>
                <br />
                <Socials>
                    <SocialLink aria-label="Twitter Account" href="https://www.twitter.com/susannahcodes" target="_blank"><FaTwitter className="changeColor" /></SocialLink>
                    <SocialLink aria-label="LinkedIn Account" href="https://www.linkedin.com/in/susannahcodes" target="_blank"><FaLinkedin className="changeColor" /></SocialLink>
                    <SocialLink aria-label="Github Account" href="https://www.github.com/susannahjones" target="_blank"><FaGithub className="changeColor" /></SocialLink>
                    <SocialLink aria-label="Open an Email to Susannah" href="mailto:susannahcodes@gmail.com"><FaEnvelope className="changeColor" /></SocialLink>
                </Socials>
                <ResumeButton>
                    <ResumeLink id="resume" aria-label="Open resume in new tab" href="https://docs.google.com/document/d/1JL2DDW9xMgGqjbAPj0sqHvxC6nLBiD2MXlNEg8bXVRQ/edit?usp=sharing" target="_blank">📄Resume</ResumeLink>
                </ResumeButton>
            </BioText>
        </BioStyle>
    );
}

export default MobileBio;