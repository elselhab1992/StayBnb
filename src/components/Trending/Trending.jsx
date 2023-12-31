import { trending } from "../../Data/data";
import { Content, Section, Img } from "../Exclusive/ExclusiveStyles";
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
              <h3>{name}</h3>
            </Content>
          );
        })}
      </MainContainer>
    </Section>
  );
};

export default Trending;
