import styled from "styled-components";

const HeaderStyle = styled.div`
    font-size: 40px;
    font-family: 'M PLUS Code Latin';
    padding-bottom: 20px;
`

export const SectionHeader = ({ text }) => {
    return (
        <HeaderStyle>{text}</HeaderStyle>
    );
}