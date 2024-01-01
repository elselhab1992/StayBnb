import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 4rem 10rem;

  @media (min-width: 300px) {
    padding: 20px 10px;
    gap: 5px;
  }

  @media (min-width: 1500px) {
    gap: 1rem;
    padding: 4rem 10rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export { Section, Container };
