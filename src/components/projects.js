import styled from "styled-components";
import { Colors } from "../content/colors";
import { ProjectStrings } from "../content/content";
import { ProjectOverlay } from "./projectOverlay";
import { SectionHeader } from "./SectionHeader";

const ProjectsStyle = styled.div`
  padding: 5% 12%;
  background-color: ${Colors.plat};
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Projects() {
  return (
    <ProjectsStyle>
      <SectionHeader text={ProjectStrings.title} />
      <ProjectsWrapper>
        <ProjectOverlay
          overlayTitle={ProjectStrings.D2Title}
          overlayPlatform={ProjectStrings.D2Platform}
          overlayPosition={ProjectStrings.D2Position}
          overlayTeam={ProjectStrings.D2Company}
          overlayYear={2018}
          imgSrc="images/Destiny_2.jpg"
          imgSrcAlt={ProjectStrings.D2AltText}
        />
        <ProjectOverlay
          overlayTitle={ProjectStrings.THPSTitle}
          overlayPlatform={ProjectStrings.THPSPlatform}
          imgSrc="images/thps.jpg"
          imgSrcAlt={ProjectStrings.THPSAltText}
          overlayPosition={ProjectStrings.THPSPosition}
          overlayYear={2020}
          overlayTeam={ProjectStrings.THPSCompany}
        />
        <ProjectOverlay
          overlayTitle={ProjectStrings.WolverineTitle}
          overlayPlatform={ProjectStrings.WolverinePlatform}
          imgSrc="images/wolverine.jpg"
          imgSrcAlt={ProjectStrings.WolverineAltText}
          overlayYear="TBA"
          overlayPosition={ProjectStrings.WolverinePosition}
          overlayTeam={ProjectStrings.WolverineCompany}
        />
      </ProjectsWrapper>
    </ProjectsStyle>
  );
}

export default Projects;
