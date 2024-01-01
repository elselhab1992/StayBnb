/* eslint-disable react/prop-types */
import {
  Content,
  ContentInfo,
  Img,
  Heading,
  StarsContainer,
  Stars,
} from "./PlacesCardStyles";
import { Link } from "react-router-dom";

const PlacesCard = ({ id, img, name, price, desc, guests, info }) => {
  return (
    <Content>
      <div>
        <Link to={`/places/${id}`}>
          <Img src={img} alt={name} onClick={window.scrollTo(0, 0)} />
        </Link>
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
};

export default PlacesCard;
