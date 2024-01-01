/* eslint-disable no-unused-vars */

import { trending } from "../../Data/data";
import { Section } from "../Exclusive/ExclusiveStyles";
import { Title, Card } from "../index";
import { MainContainer } from "./TrendingStyles";

const Trending = () => {
  return (
    <Section>
      <Title title="Trending Places" />
      <MainContainer>
        {trending.map((card) => {
          const { id, img, name } = card;

          return <Card {...card} key={id} />;
        })}
      </MainContainer>
    </Section>
  );
};

export default Trending;
