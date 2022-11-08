import styled from "styled-components";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

const HeaderStyle = styled.div`
width: 100%;
position: fixed;
z-index: 100;
display: flex;
background-color: #2A2A2A;
color: #E7E5DF;
height: 0px;
font-size: 25px;
justify-content: space-between;
align-items: center;
padding: 40px 100px;
`
const ResumeButton = styled.button`
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

const Nav = styled.div`
display: flex;
flex-direction: row;
padding-right: 200px;
align-items: center;
`

const NavLink = styled.p`
    margin-right: 25px;
    cursor: pointer;
        &: hover {
        color: #7298D7;
        transition: 0.3s ease-out;
    }
`

const ResumeLink = styled.a`
    text-decoration: none;
    font-size: 25px;
    color: #E7E5DF;
    margin-right: 5px;
    &: hover {
        color: #2A2A2A;
        transition: 0.3s ease-out;
    }
`


const HomeNavLink = styled.div`
    cursor: pointer;
    max-width: 200px;
    max-height: 100px;
    font-family: 'M PLUS Code Latin';
    &: hover {
        color: #7298D7;
        transition: 0.3s ease-out;
    }
`


function Header() {
    return (
        <HeaderStyle>
            <HomeNavLink>
                <Link to="home" smooth={true}>
                    <TypeAnimation
                        sequence={[
                            'susannah.codes', 2000
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                    />
                </Link>
            </HomeNavLink>
            <Nav>
                <NavLink>
                    <Link to="projects" smooth={true}>Projects</Link>
                </NavLink>
                <NavLink>
                    <Link to="skills" smooth={true}>Skills</Link>
                </NavLink>
                <NavLink>
                    <Link to="contact" smooth={true}>Contact</Link>
                </NavLink>
                <ResumeButton>
                    <ResumeLink id="resume" aria-label="Open Resume in New Tab" href="https://www.twitter.com/susannahcodes" href="https://docs.google.com/document/d/1JL2DDW9xMgGqjbAPj0sqHvxC6nLBiD2MXlNEg8bXVRQ/edit?usp=sharing" target="_blank">📄Resume</ResumeLink>
                </ResumeButton>
            </Nav>

        </HeaderStyle>
    );
}

export default Header;