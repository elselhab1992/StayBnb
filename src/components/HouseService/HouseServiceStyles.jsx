import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1.5rem;

  @media (min-width: 300px) and (max-width: 1024px) {
    padding-bottom: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

const Heading = styled.h3`
  opacity: 0.7;
`;

const Text = styled.p`
  opacity: 0.8;
`;

export { Container, Content, Heading, Text };
