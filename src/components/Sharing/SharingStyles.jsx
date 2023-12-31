import styled from "styled-components";
import banner from "../../assets/banner-2.png";
import { Heading } from "../Hero/HeroStyles";

const Section = styled.section`
  background-image: linear-gradient(to right, #3f2321, transparent),
    url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 10rem 5rem;
  margin: 4rem 10rem;

  @media (min-width: 300px) {
    padding: 3rem 10px;
    margin: 10px;
  }

  @media (min-width: 768px) {
    padding: 6rem 10px;
  }

  @media (min-width: 1600px) {
    padding: 10rem 5rem;
    margin: 4rem 10rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

const MainHeading = styled(Heading)`
  margin-top: 0;
`;

const Text = styled.p`
  @media (min-width: 1200px) {
    width: 25%;
    font-size: ${(props) => props.theme.fontSize.small};
  }
`;

export { Section, Container, MainHeading, Text };
