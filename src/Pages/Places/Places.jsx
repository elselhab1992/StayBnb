/* eslint-disable no-unused-vars */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { places } from "../../Data/data";
import { Title, PlacesFilter } from "../../components";
import { Container, MainContainer, PagesCount, Section } from "./PlacesStyles";
import { PlacesCard } from "../../components";
import { useParams } from "react-router-dom";
import { useState } from "react";

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
      <PagesCount>
        <FaChevronLeft />
        <span style={{ cursor: "pointer" }}>1</span>
        <span style={{ cursor: "pointer" }}>2</span>
        <span style={{ cursor: "pointer" }}>3</span>
        <span style={{ cursor: "pointer" }}>4</span>
        <span style={{ cursor: "pointer" }}>....</span>
        <span style={{ cursor: "pointer" }}>10</span>
        <FaChevronRight />
      </PagesCount>
    </Section>
  );
};

export default Places;
