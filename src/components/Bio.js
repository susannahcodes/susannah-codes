import styled from "styled-components";
import "./Bio.css"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const BioStyle = styled.div`
display: flex;
background-color: #4f4f4f;
color: #E7E5DF;
font-size: 30px;
justify-content: center;
align-items: center;
padding: 150px;
padding-top: 280px;
`
const BioText = styled.div`
display: flex;
width: 50%;
flex-direction: column;
`

const ProfileImage = styled.img`
    margin-right: 100px;
    border-radius: 150px;
`

const Title = styled.p`
    font-size: 40px;
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

function Bio() {
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

                <p>I'm a video game UI programmer and front end web developer with {expYears} years of AAA industry experience.</p>
                <Socials>
                    <SocialLink href="https://www.twitter.com/susannahcodes" target="_blank"><FaTwitter className="changeColor" /></SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/susannahcodes" target="_blank"><FaLinkedin className="changeColor" /></SocialLink>
                    <SocialLink href="https://www.github.com/susannahjones" target="_blank"><FaGithub className="changeColor" /></SocialLink>
                </Socials>
            </BioText>
        </BioStyle>
    );
}

export default Bio;