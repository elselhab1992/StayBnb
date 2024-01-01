import {
  HouseCard,
  HouseAvailability,
  HouseService,
  HouseInfo,
  Location,
  Host,
} from "../../components";
import { useParams } from "react-router-dom";
import { places } from "../../Data/data";
import { MainSection } from "./HouseDisplayStyles";

const HouseDisplay = () => {
  const { id } = useParams();
  const place = places.find((item) => item.id === Number(id));

  return (
    <MainSection>
      <HouseCard {...place} />
      <HouseAvailability />
      <HouseService />
      <HouseInfo />
      <Location />
      <Host />
    </MainSection>
  );
};

export default HouseDisplay;
