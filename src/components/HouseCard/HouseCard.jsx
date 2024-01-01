/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { places } from "../../Data/data";
import { Stars, StarsContainer } from "../PlacesCard/PlacesCardStyles";
import {
  Container,
  GuestsContainer,
  ImgContainer,
  InfoContainer,
  MainImg,
  MainImgContainer,
  SideImg,
  SideImgsContainer,
  TopContent,
} from "./HouseCardStyles";

const HouseCard = ({ img, name, desc, info, guests, price }) => {
  return (
    <Container>
      <h2>{name}</h2>
      <TopContent>
        <StarsContainer>
          <Stars /> <Stars /> <Stars /> <Stars />
          <span style={{ marginLeft: 10 }}>(150 reviews)</span>
        </StarsContainer>
        <p>{desc}</p>
      </TopContent>
      <ImgContainer>
        <MainImgContainer>
          <MainImg src={img} alt={name} />
        </MainImgContainer>
        <SideImgsContainer>
          {places.map((house) => {
            const { id, name, img } = house;

            return <SideImg src={img} alt={name} key={id} />;
          })}
        </SideImgsContainer>
      </ImgContainer>
      <InfoContainer>
        <p>{info}</p>
        <GuestsContainer>
          <p>{guests}</p>
          <h4 style={{ opacity: 0.7 }}>{price}</h4>
        </GuestsContainer>
      </InfoContainer>
    </Container>
  );
};

export default HouseCard;
