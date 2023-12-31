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
              <NavLink to="/travel">Travel</NavLink>
            </li>
            <li>
              <NavLink to="/packages">Packages</NavLink>
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
