import styled from "styled-components";
import { Container, Info } from "../Exclusive/ExclusiveStyles";
import ButtonStyles from "../Button/ButtonStyles";

const TravelContainer = styled(Container)`
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TravelButton = styled(ButtonStyles)`
  width: 200px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TravelInfo = styled(Info)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 3%;
  left: 0;
  text-align: center;
`;

export { TravelContainer, TravelButton, ButtonContainer, TravelInfo };
