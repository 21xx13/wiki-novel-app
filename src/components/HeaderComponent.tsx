import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { UserRender } from "./djangoApi/UserRender";

export const Header: React.FC<{
  setUsername: any;
  username: string;
}> = React.memo(
  ({ setUsername: setUsername, username:username }) => {
  
  const [navOpen, setNavOpen] = useState(false);
  
  return (
    <div>
      <Navbar dark expand="md">
        <div className="container-fluid">
          <div className="row">
            <NavbarToggler
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              unmountOnClose={false}
            />
            <NavbarBrand className="mr-auto" href="/">
              NovelWiki
            </NavbarBrand>
            <Collapse isOpen={navOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    Главная
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/catalog">
                    Каталог
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/course">
                    Гайд по RenPy
                  </NavLink>
                </NavItem>
                <UserRender username={username} userSetter={setUsername} />
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
});
