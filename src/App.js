import "./App.css";
import styled from "styled-components";
import Header from "./components/header";
import Bio from "./components/Bio";
import Projects from "./components/projects";
import Skills from "./components/skills";
import MobileBio from "./components/mobile/MobileBio";
import MobileHeader from "./components/mobile/MobileHeader";
import MobileProjects from "./components/mobile/MobileProjects";
import MobileSkills from "./components/mobile/MobileSkills";
import { Element } from "react-scroll";
import { useEffect, useState } from "react";
import { Colors } from "./content/colors";

const Divider = styled.div`
  background-color: ${Colors.blue};
  height: 3px;
`;

export const App = () => {
  const [isDesktop, setDesktop] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 800);
    }
  }, []);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  if (isDesktop === true) {
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
      </div>
    );
  } else if (isDesktop !== true) {
    return (
      <div>
        <MobileHeader />
        <Element name="home">
          <MobileBio id="home" />
        </Element>
        <Divider />
        <Element name="projects">
          <MobileProjects id="projects" />
        </Element>
        <Divider />
        <Element name="skills">
          <MobileSkills id="skills" />
        </Element>
        <Divider />
      </div>
    );
  }
};
