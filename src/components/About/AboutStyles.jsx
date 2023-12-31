import styled from "styled-components";
import { Section } from "../Exclusive/ExclusiveStyles";

const AboutSection = styled(Section)`
  align-items: center;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.small};
  opacity: 0.7;

  @media (min-width: 1200px) {
    padding: 1rem 10rem;
  }
`;

export { AboutSection };
