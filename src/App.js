import './App.css';
import styled from "styled-components";
import Header from './components/header';
import Bio from './components/Bio';
import Contact from './components/contact';
import Projects from './components/projects';
import Skills from './components/skills';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Divider = styled.div`
  background-color: #cb8589;
  height: 3px;
`

export const App = () => {
  return (
    <div>
      <Header />
      <Element name="home">
        <Bio id="home" />
      </Element>
      <Divider />
      <Element name="projects">
        <Projects id="projects" />
      </Element>
      <Divider />
      <Element name="skills">
        <Skills id="skills" />
      </Element>
      <Divider />
      <Element name="contact">
        <Contact id="contact" />
      </Element>
    </div>
  );
}
