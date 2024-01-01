import { FaHome, FaPaintBrush, FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Container, Content, Heading, Text } from "./HouseServiceStyles";

const HouseService = () => {
  return (
    <Container>
      <Content>
        <FaHome size={20} style={{ opacity: 0.7 }} />
        <div>
          <Heading>Entire Home</Heading>
          <Text>you will have an entire flat for you</Text>
        </div>
      </Content>
      <Content>
        <FaPaintBrush size={20} style={{ opacity: 0.7 }} />
        <div>
          <Heading>Enhanced clean</Heading>
          <Text>The host has committed to stayBnB cleaning standards</Text>
        </div>
      </Content>
      <Content>
        <FaLocationDot size={20} style={{ opacity: 0.7 }} />
        <div>
          <Heading>great location</Heading>
          <Text>just 5 minutes walk from the city centre</Text>
        </div>
      </Content>
      <Content>
        <FaHeart size={20} style={{ opacity: 0.7 }} />
        <div>
          <Heading>great check-in experience</Heading>
          <Text>self check-in & check-out</Text>
        </div>
      </Content>
    </Container>
  );
};

export default HouseService;
