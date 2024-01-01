import styled from "styled-components";
import { StarsContainer } from "../PlacesCard/PlacesCardStyles";

const HostContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  @media (min-width: 300px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const HostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

const HostInfo = styled(StarsContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  @media (min-width: 300px) {
    flex-direction: column;
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
`;

export { HostContainer, HostInfo, HostContent };
