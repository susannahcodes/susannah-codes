import styled from "styled-components";
import { SkillStrings } from "../content/content";
import { SectionHeader } from "./SectionHeader";

const BioStyle = styled.div`
padding-left: 20%;
padding-right: 20%;
padding-top: 5%;
padding-bottom: 5%;
background-color: #4f4f4f;
color: #E7E5DF;
`

const Softwares = styled.div`
font-size: 30px;
`

const Languages = styled.div`
font-size: 30px;
`

const SkillsWrapper = styled.div`
display: flex;
justify-content: center;
`

const SkillBullets = styled.div`
    font-size: 25px;
`

const Divider = styled.div`
    background-color: #CB8589;
    width: 2px;
    margin-left: 30px;
    margin-right: 30px;
`

function Skills() {
    return (
        <BioStyle>
            <SectionHeader text={SkillStrings.title} />
            <SkillsWrapper>
                <Languages>
                    <p>{SkillStrings.LanguagesTitle}</p>
                    <p>*in order of most experience</p>
                    <SkillBullets>
                        <li>{SkillStrings.CPP}</li>
                        <li>{SkillStrings.JS}</li>
                        <li>{SkillStrings.CSharp}</li>
                        <li>{SkillStrings.Python}</li>
                    </SkillBullets>
                </Languages>
                <Divider />
                <Softwares>
                    <p>{SkillStrings.SoftwaresTitle}</p>
                    <SkillBullets>
                        <li>{SkillStrings.SourceControl}</li>
                        <li>{SkillStrings.IDEs}</li>
                        <li>{SkillStrings.Design}</li>
                        <li>{SkillStrings.GameEngines}</li>
                    </SkillBullets>
                </Softwares>
            </SkillsWrapper>
        </BioStyle>
    );
}

export default Skills;