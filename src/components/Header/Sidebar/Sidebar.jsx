/* eslint-disable react/prop-types */
import { Button } from "../../index";
import { SideBar, MobileLink, MobileScrollLink } from "./SidebarStyles";

const Sidebar = ({ click, closeMenu }) => {
  return (
    <aside>
      <SideBar menu={+click}>
        <li>
          <MobileLink to="/" onClick={closeMenu}>
            Home
          </MobileLink>
        </li>
        <li>
          <MobileLink to="/places" onClick={closeMenu}>
            Popular Places
          </MobileLink>
        </li>
        <li>
          <MobileScrollLink
            to="trending"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            onClick={closeMenu}
          >
            Trending
          </MobileScrollLink>
        </li>
        <li>
          <MobileScrollLink
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            onClick={closeMenu}
          >
            About
          </MobileScrollLink>
        </li>
        <li>
          <Button to="/" onClick={closeMenu}>
            Register Now
          </Button>
        </li>
      </SideBar>
    </aside>
  );
};

export default Sidebar;
