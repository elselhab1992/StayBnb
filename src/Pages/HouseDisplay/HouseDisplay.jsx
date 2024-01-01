import { HouseCard } from "../../components";
import { useParams } from "react-router-dom";
import { places } from "../../Data/data";
import { Section } from "../Places/PlacesStyles";

const HouseDisplay = () => {
  const { id } = useParams();
  const place = places.find((item) => item.id === Number(id));

  return (
    <Section>
      <HouseCard {...place} />
    </Section>
  );
};

export default HouseDisplay;
