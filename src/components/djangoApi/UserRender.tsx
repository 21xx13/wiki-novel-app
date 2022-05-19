import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DropdownItem, DropdownMenu, DropdownToggle, NavItem, UncontrolledDropdown } from "reactstrap";

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
  const setItem = (username: string) => {
    if (username)
    return (
      <div>
        <UncontrolledDropdown>
                <DropdownToggle nav className="avatar-wrap" >
                  <a className="avatar">{username.toUpperCase()[0]}</a>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Привет, {username}
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <a onClick={logout}>Выход</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
        </div>
    );
    else return (
      <NavItem>
        <a className="nav-link login" href="/login">
          Вход
        </a>
      </NavItem>
    );
  };
 
  return <div>{setItem(username)}</div>;
});
