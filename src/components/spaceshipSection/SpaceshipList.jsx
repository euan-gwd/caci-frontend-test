import { useQuery } from "@tanstack/react-query";
import { fetchAllSpaceShips } from "../../api/fetchShips";
import styled from "styled-components";
import Spaceship from "./Spaceship";

const SpaceshipList = () => {
  const { data, isLoading, isError } = useQuery(["ships"], fetchAllSpaceShips);

  if (isLoading) {
    return <LayoutWrapper>Loading...</LayoutWrapper>;
  }

  if (isError) {
    return <LayoutWrapper>Error fetching data</LayoutWrapper>;
  }
  return (
    <StyledList>
      {data.map((ship) => (
        <Spaceship ship={ship} key={ship.name} />
      ))}
    </StyledList>
  );
};
export default SpaceshipList;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 2rem);
  height: calc(50vh - 2rem);
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  padding: 0;
  margin: 1rem;
`;
