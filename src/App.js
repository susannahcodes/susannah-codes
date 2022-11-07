import './App.css';
import styled from "styled-components";
import Header from './components/header';
import Bio from './components/Bio';
import Contact from './components/contact';
import Projects from './components/projects';
import Skills from './components/skills';

const Divider = styled.div`
  background-color: #cb8589;
  height: 3px;
`

export const App = () => {
  return (
    <div>
      <Header />
      <Bio id="home" />
      <Divider />
      <Projects id="projects" />
      <Divider />
      <Skills id="skills" />
      <Divider />
      <Contact id="contact" />
    </div>
  );
}
