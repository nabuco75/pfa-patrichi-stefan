import styled, { keyframes } from "styled-components";

// Animatii
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactContainer = styled.section`
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
  max-width: 800px;
  margin: 40px auto;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const ContactInfo = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin: 20px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  height: 100px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Componenta Contact
function Contact() {
  return (
    <ContactContainer id="contact">
      <Title>Contactează-mă</Title>
      <ContactInfo>
        Telefon: <a href="tel:+40766776908">0766776908</a>
        <br />
        Email: <a href="mailto:patrichistefan26@gmail.com">patrichistefan26@gmail.com</a>
      </ContactInfo>
    </ContactContainer>
  );
}

export default Contact;
