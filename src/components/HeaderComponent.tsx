import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';


export const Header: React.FC = () => {
    const [navOpen, setNavOpen] = useState(false)
          return(
                  <Navbar dark expand="md">
                      <div className="container-fluid">
                        <div className='row'>
                          <NavbarToggler onClick={() => {setNavOpen(!navOpen)}} />
                          <NavbarBrand className="mr-auto" href="/">NovelWiki</NavbarBrand>
                          <Collapse isOpen={navOpen} navbar>
                              <Nav navbar>
                              <NavItem>
                                  <NavLink className="nav-link"  to='/home'>Главная</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to='/catalog'>Каталог</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link"  to='/articles'>Статьи</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to='/login'>Вход</NavLink>
                              </NavItem>
                              </Nav>
                          </Collapse>
                          </div>
                      </div>
                  </Navbar>
          );
      }