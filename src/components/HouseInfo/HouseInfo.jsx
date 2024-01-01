import { Title } from "../index";
import { Text } from "../HouseService/HouseServiceStyles";
import { Container } from "./HouseInfoStyles";

const HouseInfo = () => {
  return (
    <Container>
      <Title title="the space" />
      <Text>
        The long entrance hall has a bench seat with several doors leading off
        (one of which to the right is where the utility with washing machine and
        tumble dryer are kept, and one to the left which leads to the gym /
        weight training room). The hall then has a door at the far end which
        opens into the breath-taking triple volume foyer with a seating area and
        two modern leather aviator chairs
      </Text>
    </Container>
  );
};

export default HouseInfo;
