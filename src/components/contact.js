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

const ContactForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
            <ContactForm name="contact" netlify>
                <p>
                    <Input type="text" name="name" placeholder="Name" />
                </p>
                <p>
                    <Input type="email" name="email" placeholder="Email" />
                </p>
                <p>
                    <Input type="text" name="subject" placeholder="Subject" />
                </p>
                <p>
                    <TextArea rows="7" name="message" placeholder="Message"></TextArea>
                </p>
                <p>
                    <SubmitButton type="submit">Submit</SubmitButton>
                </p>
            </ContactForm>
        </BioStyle >
    );
}

export default Contact;