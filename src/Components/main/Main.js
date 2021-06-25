import React, { Suspense } from "react";
import { MainContainer } from "./MainStyled";
import { Switch, Route } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const Main = () => {
  return (
    <MainContainer>
        <Suspense fallback={<h2>...loading</h2>}>
          <Switch>
            {mainRoutes.map(({ path, exact, component }) => (
              <Route
                path={path}
                exact={exact}
                component={ component}
                key={path}
              />
            ))}
          </Switch>
        </Suspense>
      </MainContainer>
  );
}

export default Main;