import styled from "styled-components";
import { ContactStrings } from "../content/content"
import { SectionHeader } from "./SectionHeader";

const BioStyle = styled.div`
padding-left: 20%;
padding-right: 20%;
padding-top: 5%;
padding-bottom: 5%;
display: flex;
justify-content: center;
flex-direction: column;
background-color: #E7E5DF;
color: #2A2A2A;
`

const Input = styled.input`
    width: 800px;
    height: 40px;
    font-size: 15px;
    border: none;
    &: focus {
        outline: none;
        border-bottom: 2px solid #cb8589;
    }
`
const TextArea = styled.textarea`
    width: 800px;
    font-size: 15px;
    border: none;
    resize: none;
    font-family: Segoe UI;
    &: focus {
        outline: none;
        border-bottom: 2px solid #cb8589;
    }
`

const SubmitButton = styled.button`
    background-color: #7298D7;
    color: white;
    height: 50px;
    width: 100px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    &: hover {
        background-color: #2A2A2A;
    }
`

function Contact() {
    return (
        <BioStyle>
            <SectionHeader text={ContactStrings.title} />
            <div>
                {ContactStrings.subtitle}
            </div>
            <br />
            <form name="contact" method="POST" data-netlify="true" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#2A2A2A" }}>
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <Input required type="text" name="name" placeholder="Name" />
                </p>
                <p>
                    <Input required type="email" name="email" placeholder="Email" />
                </p>
                <p>
                    <Input required type="text" name="subject" placeholder="Subject" />
                </p>
                <p>
                    <TextArea required rows="7" name="message" placeholder="Message"></TextArea>
                </p>
                <p>
                    <SubmitButton type="submit">Submit</SubmitButton>
                </p>
            </form>
        </BioStyle >
    );
}

export default Contact;