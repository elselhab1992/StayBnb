import styled from "styled-components";
import { Section } from "../Places/PlacesStyles";

const MainSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;

  @media (min-width: 300px) {
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    gap: 3rem;
  }
`;

export { MainSection };
