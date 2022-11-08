import styled from "styled-components";
import { SkillStrings } from "../../content/content";
import { SectionHeader } from "../SectionHeader";

const BioStyle = styled.div`
padding-left: 15%;
padding-right: 15%;
padding-top: 5%;
padding-bottom: 5%;
background-color: #4f4f4f;
color: #E7E5DF;
`

const Softwares = styled.div`
// font-size: 30px;
`

const Languages = styled.div`
// font-size: 30px;
`

const SkillsWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const SkillBullets = styled.ul`
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 0;
`

const Divider = styled.div`
    background-color: #CB8589;
    width: 300px;
    height: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
`

const SkillSubHeader = styled.div`
    font-size: 18px;
`

const SkillHeader = styled.div`
    font-size: 30px;
`

function MobileSkills() {
    return (
        <BioStyle>
            <SectionHeader text={SkillStrings.title} />
            <SkillsWrapper>
                <Languages>
                    <SkillHeader>{SkillStrings.LanguagesTitle}</SkillHeader>
                    <SkillSubHeader>*in order of most experience</SkillSubHeader>
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

export default MobileSkills;