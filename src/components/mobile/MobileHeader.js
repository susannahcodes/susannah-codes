import styled from "styled-components";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

const HeaderStyle = styled.div`
width: 100%;
position: fixed;
z-index: 100;
display: flex;
flex-direction: column;
background-color: #2A2A2A;
color: #E7E5DF;
font-size: 15px;
justify-content: center;
align-items: center;
`

const Nav = styled.div`
display: flex;
flex-direction: row;
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

const HomeNavLink = styled.div`
   padding-top: 1%;
    cursor: pointer;
    font-size: 28px;
    font-family: 'M PLUS Code Latin';
    &: hover {
        color: #7298D7;
        transition: 0.3s ease-out;
    }
`


function MobileHeader() {
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
            </Nav>

        </HeaderStyle>
    );
}

export default MobileHeader;