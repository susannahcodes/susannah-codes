import styled from "styled-components";
import { Colors } from "../content/colors";
import { SkillStrings } from "../content/content";
import { SectionHeader } from "./SectionHeader";

const SkillStyle = styled.div`
  padding: 5% 15%;
  background-color: ${Colors.grey};
  color: ${Colors.plat};
`;

const Softwares = styled.div``;

const Languages = styled.div``;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SkillBullets = styled.ul`
  font-size: 20px;
  margin: 5px 0px;
`;

const Divider = styled.div`
  background-color: ${Colors.pink};
  width: 2px;
  margin: 0px 150px;
`;

const SkillSubHeader = styled.div`
  font-size: 18px;
`;

const SkillHeader = styled.div`
  font-size: 30px;
`;

function Skills() {
  return (
    <SkillStyle>
      <SectionHeader text={SkillStrings.title} />
      <SkillsWrapper>
        <Languages>
          <SkillHeader>{SkillStrings.LanguagesTitle}</SkillHeader>
          <SkillSubHeader>{SkillStrings.LanguagesSubTitle}</SkillSubHeader>
          <SkillBullets>
            <li>{SkillStrings.CPP}</li>
            <li>{SkillStrings.JS}</li>
            <li>{SkillStrings.CSharp}</li>
            <li>{SkillStrings.Python}</li>
          </SkillBullets>
        </Languages>
        <Divider />
        <Softwares>
          <SkillHeader>{SkillStrings.SoftwaresTitle}</SkillHeader>
          <SkillSubHeader>
            <br />{" "}
          </SkillSubHeader>
          <SkillBullets>
            <li>{SkillStrings.SourceControl}</li>
            <li>{SkillStrings.IDEs}</li>
            <li>{SkillStrings.Design}</li>
            <li>{SkillStrings.GameEngines}</li>
          </SkillBullets>
        </Softwares>
      </SkillsWrapper>
    </SkillStyle>
  );
}

export default Skills;
