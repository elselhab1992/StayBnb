import styled from "styled-components";
import { FaStar } from "react-icons/fa6";

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;

  @media (min-width: 300px) {
    flex-direction: column;
    gap: 5px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  @media (min-width: 300px) {
    gap: 5px;
  }
`;

const Img = styled.img`
  width: 400px;
  border-radius: 10px;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 600px;
  }

  @media (min-width: 1200px) {
    width: 400px;
  }
`;

const Heading = styled.h3`
  font-size: ${(props) => props.theme.fontSize.medium};

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.small};
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Stars = styled(FaStar)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.buttons};
`;

export { Content, ContentInfo, Img, Heading, StarsContainer, Stars };
