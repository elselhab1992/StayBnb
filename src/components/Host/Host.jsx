import host from "../../assets/host.png";
import { Stars, StarsContainer } from "../PlacesCard/PlacesCardStyles";
import { HostContainer, HostContent, HostInfo } from "./HostStyles";
import { Button } from "../index";

const Host = () => {
  return (
    <HostContainer>
      <img src={host} alt="host" style={{ borderRadius: "50%" }} />
      <HostContent>
        <h3>
          Hosted By: <span style={{ marginLeft: 10 }}>Mohamed Elselhab</span>
        </h3>
        <HostInfo>
          <StarsContainer>
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <span style={{ marginLeft: 10 }}>(150 reviews)</span>
          </StarsContainer>
          <p>response rate: 100%</p>
          <p>response time: 60 min</p>
        </HostInfo>
        <Button>Contact Host</Button>
      </HostContent>
    </HostContainer>
  );
};

export default Host;
