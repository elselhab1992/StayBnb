/* eslint-disable no-unused-vars */

import { Section } from "../Exclusive/ExclusiveStyles";
import { Title, Card } from "../index";
import { traveller } from "../../Data/data";
import {
  TravelButton,
  TravelContainer,
  ButtonContainer,
} from "./TravellerStyles";

const Traveller = () => {
  return (
    <Section>
      <Title title="traveller stories" />
      <TravelContainer>
        {traveller.map((card) => {
          const { img, name, id } = card;

          return <Card {...card} key={id} />;
        })}
      </TravelContainer>
      <ButtonContainer>
        <TravelButton>Start Making Money</TravelButton>
      </ButtonContainer>
    </Section>
  );
};

export default Traveller;
