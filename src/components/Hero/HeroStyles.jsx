import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import heroImg from "../../assets/banner.png";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${heroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 300px) {
    gap: 10px;
  }

  @media (min-width: 768px) {
    gap: 1rem;
    padding: 0 10px;
  }

  @media (min-width: 1200px) {
    padding: 0;
  }
`;

const Heading = styled.h1`
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors.secondary};

  @media (min-width: 300px) {
    font-weight: ${(props) => props.theme.fontWeight.extraBold};
    font-size: ${(props) => props.theme.fontSize.medium};
    margin-top: 13rem;
  }

  @media (min-width: 768px) {
    font-weight: ${(props) => props.theme.fontWeight.medium};
    font-size: ${(props) => props.theme.fontSize.xl};
    margin-top: 15rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr 0.5fr;
  padding: 1rem;
  border-radius: 5rem;
  background-color: ${(props) => props.theme.colors.secondary};
  position: relative;

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    gap: 5px;
    border-radius: 5px;
    width: 65%;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    border-radius: 5rem;
  }

  @media (min-width: 960px) {
    grid-template-columns: 2fr 1fr 1fr 2fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
    border-radius: 5rem;
    width: 90%;
  }

  @media (min-width: 1600px) {
    grid-template-columns: 3fr 1fr 1fr 3fr 1fr;
    padding: 0.5rem;
    width: 55%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px 20px;
`;

const Label = styled.label`
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.fontSize.small};
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.secondary};

  @media (min-width: 768px) and (max-width: 900px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 300px) {
    justify-content: flex-start;
    border-top: 1px solid #ccc;
    padding: 5px;
  }

  @media (min-width: 768px) {
    border-top: none;
    border-left: 1px solid #ccc;
  }
`;

const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;

  @media (min-width: 300px) and (max-width: 600px) {
    border-top: 1px solid #ccc;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    position: absolute;
    bottom: -1.5rem;
    left: 45%;
  }
`;

const SearchIcon = styled(IoSearch)`
  font-size: 50px;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.buttons};
  border-radius: 50%;
  padding: 1rem;
`;

export {
  Section,
  Heading,
  Container,
  Input,
  SearchIcon,
  Content,
  Label,
  InputContainer,
  SearchIconContainer,
};
