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

const PortfolioContainer = styled.section`
  padding: 40px 20px;
  background-color: #f8f8f8; // O culoare de fundal suavă
  text-align: center;
  max-width: 1500px;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 0;
  margin: 20px 0;
`;

const ProjectCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: #444;
  margin: 15px;
`;

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  margin: 15px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

// Componenta Portfolio
function Portfolio() {
  const projects = [
    { name: "Școala Gimnazială 'Ștefan cel Mare' Vaslui", url: "http://scoala5vaslui.ro" },
    { name: "Școala Gimnazială 'Vasile Alecsandri' Vaslui", url: "http://scoala9vaslui.ro" },
    { name: "Școala Gimnazială 'Andone Cumpătescu' Rafaila", url: "http://scoalarafaila.ro" },
    { name: "Websiste-ul Oficial al Olimpiadei Naționale de Matematică, Huși, 2-7 aprilie, 2024", url: "http://ssmrvaslui.ro" },
  ];

  return (
    <PortfolioContainer id="portfolio">
      <Title>Portofoliul Meu</Title>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.name}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectLink href={project.url} target="_blank">
              Vizitează site-ul
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PortfolioContainer>
  );
}

export default Portfolio;
