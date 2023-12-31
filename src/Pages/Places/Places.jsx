import { places } from "../../Data/data";
import { Title, PlacesFilter } from "../../components";
import {
  Container,
  Content,
  ContentInfo,
  Heading,
  Img,
  MainContainer,
  Section,
  Stars,
  StarsContainer,
} from "./PlacesStyles";

const Places = () => {
  return (
    <Section>
      <Title title="Popular Places" />
      <MainContainer>
        <Container>
          {places.map((place) => {
            const { id, img, name, price, desc, guests, info } = place;

            return (
              <Content key={id}>
                <div>
                  <Img src={img} alt={name} />
                </div>
                <ContentInfo>
                  <p style={{ opacity: 0.9 }}>{desc}</p>
                  <Heading>{name}</Heading>
                  <p style={{ opacity: 0.9 }}>{info}</p>
                  <StarsContainer>
                    <Stars /> <Stars /> <Stars /> <Stars />
                    <span style={{ marginLeft: 10 }}>(150 reviews)</span>
                  </StarsContainer>
                  <p style={{ opacity: 0.9 }}>{guests}</p>
                  <h4 style={{ opacity: 0.7 }}>{price}</h4>
                </ContentInfo>
              </Content>
            );
          })}
        </Container>
        <PlacesFilter />
      </MainContainer>
    </Section>
  );
};

export default Places;
