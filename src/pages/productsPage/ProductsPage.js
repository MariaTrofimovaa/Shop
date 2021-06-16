import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { productsRoutes } from "../../routes/productsRoutes";

const ProductsPage = ({ match }) => {
  return (
    <>
      <h2>ProductsPage</h2>
      <ul>
        {productsRoutes.map((route) => (
          <li key={route.path} className="headerListItem">
            <NavLink
              to={match.url + route.path}
              exact={route.exact}
              className="headerListLink"
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Switch>
        {productsRoutes.map((route) => (
          <Route
            path={match.path + route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </>
  );
};

export default ProductsPage;
