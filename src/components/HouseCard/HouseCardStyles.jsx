import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  @media (min-width: 300px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5rem;
  width: 100%;

  @media (min-width: 300px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1300px) {
    gap: 5rem;
  }
`;

const MainImgContainer = styled.div`
  width: 45%;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 1300px) {
    width: 45%;
  }
`;

const MainImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const SideImgsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 29%;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 63%;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1300px) {
    width: 50%;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SideImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 45%;

  @media (min-width: 300px) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1500px) {
    width: 45%;
  }
`;

const GuestsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export {
  Container,
  TopContent,
  MainImgContainer,
  ImgContainer,
  MainImg,
  SideImgsContainer,
  SideImg,
  InfoContainer,
  GuestsContainer,
};
