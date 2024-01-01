import { Title } from "../index";
import { Container, Map, ImgContainer } from "./LocationStyles";

const Location = () => {
  return (
    <Container>
      <Title title="location on map" />
      <ImgContainer>
        {/* <Img src={map} alt="map" /> */}
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.3055270398286!2d-2.2274558230259536!3d53.48087056464918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1bdae2e2e2b%3A0xad6a1d1593b09a5d!2sDakota%20Manchester!5e0!3m2!1sen!2suk!4v1704121420924!5m2!1sen!2suk"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Map>
      </ImgContainer>
      <h3>Great Ancoats, manchester, UK</h3>
      <p>2km away from the city centre</p>
    </Container>
  );
};

export default Location;
