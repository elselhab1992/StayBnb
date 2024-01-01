import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  @media (min-width: 300px) and (max-width: 1024px) {
    padding-bottom: 1rem;
    width: 100%;
  }
`;

export { Container };
