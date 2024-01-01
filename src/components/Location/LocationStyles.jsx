import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Map = styled.iframe`
  width: 100%;
  height: 500px;

  @media (min-width: 300px) {
    height: 300px;
  }

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1200px) {
    height: 500px;
  }
`;

export { Container, ImgContainer, Map };
