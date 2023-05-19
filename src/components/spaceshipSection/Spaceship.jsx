import styled from "styled-components";
import { GiTrophyCup } from "react-icons/gi";

const Spaceship = ({ ship }) => {
  return (
    <StyledListItem>
      <StyledHeader>{ship.name}</StyledHeader>
      <StyledDetails>
        <dd>Model:</dd>
        <dt>{ship.model}</dt>
      </StyledDetails>
      <StyledDetails>
        <dd>Crew:</dd>
        <dt>{ship.crew}</dt>
      </StyledDetails>
      <StyledDetails>
        <dd>Number of films:</dd>
        <dt>{ship.films.length}</dt>
      </StyledDetails>
      <StyledIcon>{ship.hasIcon && <GiTrophyCup size={30} />}</StyledIcon>
    </StyledListItem>
  );
};
export default Spaceship;

const StyledListItem = styled.li`
  flex: 1 1 30rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 1rem;
`;

const StyledHeader = styled.h2`
  margin: 0;
  color: var(--color-accent);
`;

const StyledDetails = styled.dl`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const StyledIcon = styled.p`
  display: flex;
  justify-content: center;
`;
