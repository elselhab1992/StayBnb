/* eslint-disable react/prop-types */
import { Content, Img, Info } from "./CardStyles";

const Card = ({ img, name, price }) => {
  return (
    <Content>
      <Img src={img} alt={name} />
      <Info>
        <h5>{name}</h5>
        <h6>{price}</h6>
      </Info>
    </Content>
  );
};

export default Card;
