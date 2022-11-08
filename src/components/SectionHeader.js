import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";

const HeaderStyle = styled.div`
  font-size: 40px;
  font-family: "M PLUS Code Latin";
  padding-bottom: 20px;
`;

export const SectionHeader = ({ text }) => {
    return <HeaderStyle>
        <TypeAnimation
            sequence={[
                text, 2000
            ]}
            cursor={false}
            repeat={Infinity}
        />
    </HeaderStyle>;
};
