import { Label, Input, InputContainer } from "../Hero/HeroStyles";
import {
  MainContainer,
  InputContent,
  Button,
  ButtonContainer,
} from "./HouseAvailabilityStyles";

const HouseAvailability = () => {
  return (
    <MainContainer>
      <InputContent>
        <InputContainer>
          <Label>check in</Label>
          <Input type="text" placeholder="Add Date" />
        </InputContainer>
      </InputContent>
      <InputContent>
        <InputContainer>
          <Label>check out</Label>
          <Input type="text" placeholder="Add Date" />
        </InputContainer>
      </InputContent>
      <InputContent>
        <InputContainer>
          <Label>guests</Label>
          <Input type="text" placeholder="2 Guests" />
        </InputContainer>
      </InputContent>
      <ButtonContainer>
        <Button>Check Availability</Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default HouseAvailability;
