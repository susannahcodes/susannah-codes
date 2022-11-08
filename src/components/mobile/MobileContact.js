import styled from "styled-components";
import { Colors } from "../../content/colors";
import { ContactStrings } from "../../content/content";
import { SectionHeader } from "../SectionHeader";

const ContactStyle = styled.div`
  padding: 5% 15%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${Colors.plat};
  color: ${Colors.slate};
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  font-size: 15px;
  border: none;
  &: focus {
    outline: none;
    border-bottom: 2px solid ${Colors.pink};
    transition: 0.3s ease-out;
  }
`;
const TextArea = styled.textarea`
  width: 300px;
  font-size: 15px;
  border: none;
  resize: none;
  font-family: Segoe UI;
  &: focus {
    outline: none;
    border-bottom: 2px solid ${Colors.pink};
    transition: 0.3s ease-out;
  }
`;

const SubmitButton = styled.button`
  background-color: ${Colors.blue};
  color: ${Colors.slate};
  height: 50px;
  width: 100px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  &: hover {
    background-color: ${Colors.slate};
    color: ${Colors.plat};
    transition: 0.3s ease-out;
  }
`;

function MobileContact() {
    return (
        <ContactStyle>
            <SectionHeader text={ContactStrings.title} />
            <div>{ContactStrings.subtitle}</div>
            <br />
            <form
                name="mobile-contact"
                method="post"
                data-netlify="true"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: Colors.slate,
                }}
            >
                <input type="hidden" name="form-name" value="mobile-contact" />
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
                    <TextArea
                        required
                        rows="7"
                        name="message"
                        placeholder="Message"
                    ></TextArea>
                </p>
                <p>
                    <SubmitButton type="submit">{ContactStrings.submit}</SubmitButton>
                </p>
            </form>
        </ContactStyle>
    );
}

export default MobileContact;
