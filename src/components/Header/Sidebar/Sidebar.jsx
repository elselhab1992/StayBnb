/* eslint-disable react/prop-types */
import { Button } from "../../index";
import { SideBar, MobileLink } from "./SidebarStyles";

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
          <MobileLink to="popular" onClick={closeMenu}>
            Popular Places
          </MobileLink>
        </li>
        <li>
          <MobileLink to="travel" onClick={closeMenu}>
            Travel
          </MobileLink>
        </li>
        <li>
          <MobileLink to="packages" onClick={closeMenu}>
            Packages
          </MobileLink>
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
