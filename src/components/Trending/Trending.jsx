import { trending } from "../../Data/data";
import { Content, Section, Img, Info } from "../Exclusive/ExclusiveStyles";
import { Title } from "../index";
import { MainContainer } from "./TrendingStyles";

const Trending = () => {
  return (
    <Section>
      <Title title="Trending Places" />
      <MainContainer>
        {trending.map((card) => {
          const { id, img, name } = card;

          return (
            <Content key={id}>
              <Img src={img} alt={name} />
              <Info>{name}</Info>
            </Content>
          );
        })}
      </MainContainer>
    </Section>
  );
};

export default Trending;
