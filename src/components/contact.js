import styled from "styled-components";
import { ContactStrings } from "../content/content"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
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
const BioText = styled.div`
display: flex;
width: 50%;
flex-direction: column;
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
    width: 600px;
    height: 40px;
    font-size: 15px;
    border: none;
`
const TextArea = styled.textarea`
    width: 600px;
    font-size: 15px;
    border: none;
    resize: none;
`

const Socials = styled.div`
    display: flex;
    flex-direction: row;
`

const SubmitButton = styled.button`
    background-color: #CB8589;
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
            <p>
                {ContactStrings.subtitle}
            </p>
            <ContactForm name="contact" method="POST" data-netlify="true">
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