import {
  Section,
  Heading,
  Container,
  SearchIcon,
  Content,
  Input,
  Label,
  InputContainer,
  SearchIconContainer,
} from "./HeroStyles";

const Hero = () => {
  return (
    <Section>
      <Heading>find your next stay</Heading>
      <Container>
        <InputContainer>
          <Label>location</Label>
          <Input type="text" placeholder="Where Are You Going?" />
        </InputContainer>
        <Content>
          <InputContainer>
            <Label>check in</Label>
            <Input
              type="text"
              onChange={(e) => console.log(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Add Date"
            />
          </InputContainer>
        </Content>
        <Content>
          <InputContainer>
            <Label>check out</Label>
            <Input
              type="text"
              onChange={(e) => console.log(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Add Date"
            />
          </InputContainer>
        </Content>
        <Content>
          <InputContainer>
            <Label>guests</Label>
            <Input type="text" placeholder="Add Guests" />
          </InputContainer>
        </Content>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </Container>
    </Section>
  );
};

export default Hero;
