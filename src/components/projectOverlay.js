import styled from "styled-components";
import { Colors } from "../content/colors";

const HoverContainer = styled.div`
  width: 350px;
  height: 450px;
  position: relative;
`;

const Overlay = styled.div`
  width: 350px;
  height: 450px;
  opacity: 0;
  transition: 0.5s ease;
  background-color: black;
  position: absolute;
  &: hover {
    opacity: 0.9;
  }
`;

const OverlayImage = styled.img`
  width: 350px;
  height: 450px;
`;

const Text = styled.div`
  flex-direction: column;
  color: ${Colors.plat};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 25px;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 20px;
`;

export const ProjectOverlay = ({
  imgSrc,
  imgSrcAlt,
  overlayTitle,
  overlayPlatform,
  overlayPosition,
  overlayTeam,
  overlayYear,
}) => {
  return (
    <HoverContainer>
      <Overlay>
        <Text>
          {overlayTitle}
          <br />
          <SubTitle> {overlayPlatform} </SubTitle>
          <SubTitle> {overlayYear} </SubTitle>
          <br />
          <SubTitle> {overlayPosition} </SubTitle>
          <SubTitle> {overlayTeam}</SubTitle>
        </Text>
      </Overlay>
      <OverlayImage src={imgSrc} alt={imgSrcAlt} />
    </HoverContainer>
  );
};
