/* eslint-disable no-unused-vars */

import { Title, Card } from "../index";
import { exclusives } from "../../Data/data";
import { Section, Container } from "./ExclusiveStyles";

const Exclusive = () => {
  return (
    <Section>
      <Title title="Exclusives" />
      <Container>
        {exclusives.map((card) => {
          const { id, img, name, price } = card;
          return <Card {...card} key={id} />;
        })}
      </Container>
    </Section>
  );
};

export default Exclusive;
