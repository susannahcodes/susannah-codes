import styled from "styled-components";

const HeaderStyle = styled.div`
    font-size: 30px;
    font-family: 'M PLUS Code Latin';
`

export const SectionHeader = ({ text }) => {
    return (
        <HeaderStyle>{text}</HeaderStyle>
    );
}