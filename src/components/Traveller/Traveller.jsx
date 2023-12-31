import { Content, Img, Section } from "../Exclusive/ExclusiveStyles";
import { Title } from "../index";
import { traveller } from "../../Data/data";
import {
  TravelButton,
  TravelContainer,
  ButtonContainer,
  TravelInfo,
} from "./TravellerStyles";

const Traveller = () => {
  return (
    <Section>
      <Title title="traveller stories" />
      <TravelContainer>
        {traveller.map((card) => {
          const { img, name, id } = card;

          return (
            <Content key={id}>
              <Img src={img} alt={name} />
              <TravelInfo>
                <h3>{name}</h3>
              </TravelInfo>
            </Content>
          );
        })}
      </TravelContainer>
      <ButtonContainer>
        <TravelButton>Start Making Money</TravelButton>
      </ButtonContainer>
    </Section>
  );
};

export default Traveller;
