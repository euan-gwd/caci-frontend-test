import { useQuery } from "@tanstack/react-query";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { GiReturnArrow } from "react-icons/gi";

import { fetchSpaceShip } from "../../api/fetchShip";

const SpaceshipDetails = () => {
  const {
    state: { url },
  } = useLocation();
  const {
    data: ship,
    isLoading,
    isError,
  } = useQuery(["ship", url], fetchSpaceShip);

  if (isLoading) {
    return <LayoutWrapper>Loading...</LayoutWrapper>;
  }

  if (isError) {
    return <LayoutWrapper>Error fetching data</LayoutWrapper>;
  }

  console.log(
    "file: SpaceshipDetails.jsx:16 -> SpaceshipDetails -> ship:",
    ship
  );
  return (
    <StyledListItem>
      <StyledHeader>{ship.name}</StyledHeader>
      <StyledDetails>
        <dd>Model:</dd>
        <dt>{ship.model}</dt>
        <dd>Crew:</dd>
        <dt>{ship.crew}</dt>
        <dd>Passengers:</dd>
        <dt>{ship.passengers}</dt>
        <dd>Cargo Capacity:</dd>
        <dt>{ship.cargo_capacity}</dt>
        <dd>Manufacturer:</dd>
        <dt>{ship.manufacturer}</dt>
        <dd>Length:</dd>
        <dt>{ship.length}</dt>
        <dd>Number of films:</dd>
        <dt>{ship.films.length}</dt>
      </StyledDetails>
      <StyledLink to="/">
        <GiReturnArrow />
      </StyledLink>
    </StyledListItem>
  );
};
export default SpaceshipDetails;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 2rem);
  height: calc(50vh - 2rem);
`;

const StyledListItem = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0 2rem;
`;

const StyledHeader = styled.h2`
  margin: 0;
  color: var(--color-accent);
  text-align: center;
`;

const StyledDetails = styled.dl`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  dd {
    margin: 0;
  }
  dt {
    margin: 0;
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  margin: 1rem;
  color: var(--color-primary);
`;
