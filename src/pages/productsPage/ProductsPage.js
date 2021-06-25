import React, { Suspense } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { productsRoutes } from "../../routes/productsRoutes";

const ProductsPage = ({ match, data }) => {
  const getData = (path) => {
    if (path === "/laptops") {
      return {
        laptops: data.laptops,
        addToCart: data.addToCart,
      };
    }

    if (path === "/phones") {
      return {
        phones: data.phones,
        addToCart: data.addToCart,
      };
    }
  };

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
      <Suspense>
        <Switch>
          {productsRoutes.map(({ path, exact, component: MyComponent }) => (
            <Route
              path={match.path + path}
              exact={exact}
              // component={component}
              render={(props) => <MyComponent {...props} {...getData(path)} />}
              key={path}
            />
          ))}
        </Switch>
      </Suspense>
    </>
  );
};

export default ProductsPage;
