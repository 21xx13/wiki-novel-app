import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DropdownItem, DropdownMenu, DropdownToggle, NavItem, UncontrolledDropdown } from "reactstrap";
import classes from './UserRender.module.css';

export const UserRender: React.FC<{
  username: string;
  userSetter: any;
}> = React.memo(({ username, userSetter: userSetter }) => {
  
  const navigate = useNavigate();
  let logout = async () => {
    await axios.get('/logout');
    userSetter(null);
    navigate('/login');
  };
  const setItem = (userName: string) => {
    if (userName){
      return (
        <div>
          <UncontrolledDropdown>
                  <DropdownToggle nav className={classes.avatarWrap} >
                    <span className={classes.avatar}>{userName.toUpperCase()[0]}</span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Привет, {userName}
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <span onClick={logout}>Выход</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
          </div>
      );
    } else return (
      <NavItem>
        <Link className="nav-link login" to="/login">
          Вход
        </Link>
      </NavItem>
    );
  };
 
  return <div>{setItem(username)}</div>;
});
