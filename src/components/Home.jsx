import styled from "styled-components";
import SpaceshipList from "./spaceshipSection/SpaceshipList";
const Home = () => {
  return (
    <StyledMain>
      <SpaceshipList />
    </StyledMain>
  );
};
export default Home;

const StyledMain = styled.main`
  padding: 1rem;
`;
