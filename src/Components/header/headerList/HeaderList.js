import React from "react";
import { NavLink } from "react-router-dom";
import { mainRotes } from "../../../routes/mainRoutes";
import { HeaderNavigation } from "./HeaderListStyled";

const HeaderList = () => {
  return (
    <HeaderNavigation>
      <ul className="headerList">
        {mainRotes.map((route) => (
          <li key={route.path} className="headerListItem">
            <NavLink
              to={route.path}
              exact={route.exact}
              className="headerListLink"
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </HeaderNavigation>
  );
};

export default HeaderList;
