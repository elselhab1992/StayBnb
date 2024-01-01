/* eslint-disable no-unused-vars */

import { places } from "../../Data/data";
import { Title, PlacesFilter } from "../../components";
import { Container, MainContainer, Section } from "./PlacesStyles";
import { PlacesCard } from "../../components";
import { useParams } from "react-router-dom";

const Places = () => {
  return (
    <Section>
      <Title title="Popular Places" />
      <MainContainer>
        <Container>
          {places.map((place) => {
            const { id, img, name, price, desc, guests, info } = place;

            return <PlacesCard {...place} key={id} />;
          })}
        </Container>
        <PlacesFilter />
      </MainContainer>
    </Section>
  );
};

export default Places;
