/* eslint-disable react/prop-types */
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/logo-red.png";
import { Button } from "../../index";
import {
  Header,
  LogoContainer,
  Logo,
  Container,
  NavIcons,
  NavLinks,
  NavLink,
  RegisterDiv,
  ScrollLink,
} from "./NavbarStyles";
import { Link } from "react-router-dom";

function Navbar({ click, handleClick }) {
  return (
    <Header>
      <Link to="/">
        <LogoContainer>
          <Logo src={logo} alt="logo" />
        </LogoContainer>
      </Link>

      <Container>
        <nav>
          <NavLinks>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/places">Popular Places</NavLink>
            </li>
            <li>
              <ScrollLink
                to="trending"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={500}
              >
                Trending
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
          </NavLinks>
        </nav>
      </Container>
      <RegisterDiv>
        <Button>Register Now</Button>
      </RegisterDiv>
      <NavIcons onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#000", cursor: "pointer" }} />
        ) : (
          <FaBars size={30} style={{ color: "#000", cursor: "pointer" }} />
        )}
      </NavIcons>
    </Header>
  );
}

export default Navbar;
