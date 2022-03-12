import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';


export const Header: React.FC = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
          return(
                <div>
                    <Navbar dark expand="md">
                      <div className="container-fluid">
                        <div className='row'>
                          <NavbarToggler onClick={() => {setNavOpen(!navOpen)}} unmountOnClose={false}/>
                          <NavbarBrand className="mr-auto" href="/">NovelWiki</NavbarBrand>
                          <Collapse isOpen={navOpen} navbar>
                              <Nav navbar>
                              <NavItem>
                                  <NavLink className="nav-link"  to='/'>Главная</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to='/catalog'>Каталог</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link"  to='/articles'>Статьи</NavLink>
                              </NavItem>
                              <NavItem>
                                  <a className="nav-link login" onClick={toggle}>Вход</a>
                              </NavItem>
                              </Nav>
                          </Collapse>
                          </div>
                      </div>
                  </Navbar>
                  <Modal isOpen={modal} toggle={toggle} >
                  <ModalHeader toggle={toggle}>Вход </ModalHeader>
                  <ModalBody>
                      <Form>
                          <FormGroup>
                              <Label htmlFor="username">Логин</Label>
                              <Input type="text" id="username" name="username"  />
                          </FormGroup>
                          <FormGroup>
                              <Label htmlFor="password">Пароль</Label>
                              <Input type="password" id="password" name="password"  />
                          </FormGroup>
                          <FormGroup check className='check-style'>
                              <Label check>
                                  <Input type="checkbox" name="remember" />Запомнить
                              </Label>
                          </FormGroup>
                        <div className='btn-group-log'>
                        <Button type="submit" value="submit" className='log-btn' color="dark">Вход</Button>
                        <Button  outline color="dark" className='log-btn'>Регистрация</Button>
                        </div>
                          
                          
                      </Form>
                  </ModalBody>
              </Modal>
                </div>
            );
      }