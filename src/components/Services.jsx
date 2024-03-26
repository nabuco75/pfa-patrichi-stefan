import styled, { keyframes } from "styled-components";

// Animatii
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ServicesContainer = styled.section`
  padding: 40px 20px;
  background-color: #fafafa; // O culoare de fundal suavă
  text-align: center;
  max-width: 1500px;
  margin: 40px auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
  animation: ${fadeIn} 1s ease-out;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 15px;
  animation: ${fadeIn} 1s ease-out forwards;
  opacity: 0;
  &:hover {
    color: #000; // Schimbă culoarea la hover
    transform: scale(1.05); // Mărește ușor
  }
`;

// Componenta Services
function Services() {
  return (
    <ServicesContainer id="services">
      <Title>Serviciile Mele</Title>
      <ServiceList>
        <ServiceItem style={{ animationDelay: "0.5s" }}>Servicii de dezvoltare web (realizare website-uri)</ServiceItem>
        <ServiceItem style={{ animationDelay: "1s" }}>Grafică de prezentare - invitații, bannere stradale, mash, afișe, diplome, cărți de vizită</ServiceItem>
        <ServiceItem style={{ animationDelay: "1.5s" }}>consultanță în IT</ServiceItem>
      </ServiceList>
    </ServicesContainer>
  );
}

export default Services;
