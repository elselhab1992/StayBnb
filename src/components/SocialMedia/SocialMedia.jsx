import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { SocialIcons } from "./SocialMediaStyles";

const SocialMedia = () => {
  return (
    <SocialIcons>
      <FaFacebook size={30} style={{ opacity: 0.7, cursor: "pointer" }} />
      <FaTwitter size={30} style={{ opacity: 0.7, cursor: "pointer" }} />
      <FaInstagramSquare
        size={30}
        style={{ opacity: 0.7, cursor: "pointer" }}
      />
      <FaLinkedin size={30} style={{ opacity: 0.7, cursor: "pointer" }} />
    </SocialIcons>
  );
};

export default SocialMedia;
