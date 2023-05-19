import styled from "styled-components";
import SpaceshipList from "./spaceshipSection/SpaceshipList";
import logo from "../assets/Star_Wars_Logo.svg";
const Home = () => {
  return (
    <StyledMain>
      <div>
        <StyledTitle>
          <StyledImg src={logo} />
        </StyledTitle>
        <StyledSubtitle>CACI Frontend Test using SWAPI API</StyledSubtitle>
        <StyledDescWrapper>
          <StyledDesc>
            This is a test of the SWAPI API using React, React Query, Styled
            components and React Router, and deployed to Netlify. Results are
            sorted by crew size, and the ships with the largest crew are marked
            with a trophy icon.
          </StyledDesc>
        </StyledDescWrapper>
      </div>
      <section>
        <SpaceshipList />
      </section>
    </StyledMain>
  );
};
export default Home;

const StyledMain = styled.main`
  padding: 1rem;
`;

const StyledTitle = styled.h1`
  text-align: center;
  margin: 0;
`;

const StyledImg = styled.img`
  max-width: 30rem;
  margin: 0 auto;
  display: block;
`;

const StyledSubtitle = styled.h2`
  text-align: center;
  color: var(--color-secondary);
  margin: 0;
`;

const StyledDescWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;

const StyledDesc = styled.p`
  max-width: 50rem;
  text-align: center;
  font-weight: 200;
`;