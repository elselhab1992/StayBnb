import styled from "styled-components";

const Section = styled.section`
  padding: 10rem 13rem;

  @media (min-width: 300px) {
    padding: 100px 10px;
  }

  @media (min-width: 1300px) {
    padding: 10rem 13rem;
  }
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

const PagesCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 5rem;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export { Section, MainContainer, Container, PagesCount };
