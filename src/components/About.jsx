import styled, { keyframes } from "styled-components";
import profileImage from "../assets/Foto1.jpg";

// Keyframes pentru animații
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.section`
  padding: 60px;
  background-color: #f4f4f4;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 1 rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 220px;
  height: auto;
  border-radius: 50%;
  margin: 0 auto 2rem;
  border: 4px solid #fff;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 0.8s ease-out forwards;
  opacity: 0;
`;

// Componenta About actualizată cu text introductiv
function About() {
  // Text introductiv
  const introText = [
    "Salutare, sunt Patrichi Ștefan, proaspăt absolvent pasionat de web development și mândru fondator al propriei mele inițiative ca Persoană Fizică Autorizată.",
    ,
    "Dacă sunteți în căutarea unei prezențe online care să reflecte valorile și obiectivele dvs., sunt aici pentru a vă ajuta și a vă promova",
  ];

  return (
    <Container>
      <Title>Despre </Title>
      <Title>Patrichi A. Ștefan Persoană Fizică Autorizată</Title>
      <Image src={profileImage} alt="Patrichi Ștefan" />
      {introText.map((paragraph, index) => (
        <Paragraph key={index} style={{ animationDelay: `${0.5 + index * 0.5}s` }}>
          {paragraph}
        </Paragraph>
      ))}
    </Container>
  );
}

export default About;
