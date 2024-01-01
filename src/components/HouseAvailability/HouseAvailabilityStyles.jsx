import styled from "styled-components";
import { Container, Content } from "../Hero/HeroStyles";
import Buttons from "../Button/ButtonStyles";

const MainContainer = styled(Container)`
  border-radius: 10px;
  box-shadow: 5px 5px 10px 10px #ccc;
  width: 100%;
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const InputContent = styled(Content)`
  border-left: none;

  @media (min-width: 300px) {
    border-top: none;
    border-bottom: 1px solid #ccc;
  }

  @media (min-width: 768px) {
    border-bottom: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Buttons)`
  width: 250px;
  border-radius: 5px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.fontSize.small};

  @media (min-width: 768px) {
    font-weight: ${(props) => props.theme.fontSize.small};
    width: 150px;
  }

  @media (min-width: 1024px) {
    font-weight: ${(props) => props.theme.fontWeight.medium};
    width: 200px;
  }

  @media (min-width: 1200px) {
    width: 250px;
  }
`;

export { MainContainer, InputContent, ButtonContainer, Button };
