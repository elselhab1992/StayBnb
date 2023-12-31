import { Title } from "../index";
import { exclusives } from "../../Data/data";
import { Section, Container, Content, Img, Info } from "./ExclusiveStyles";

const Exclusive = () => {
  return (
    <Section>
      <Title title="Exclusives" />
      <Container>
        {exclusives.map((location, index) => {
          const { img, name, price } = location;

          return (
            <Content key={index}>
              <Img src={img} alt={name} />
              <Info>
                <h5>{name}</h5>
                <h6>{price}</h6>
              </Info>
            </Content>
          );
        })}
      </Container>
    </Section>
  );
};

export default Exclusive;
