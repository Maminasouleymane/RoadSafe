import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../components/Landing";
import MapCurrentState from "../components/MapCurrentState";
import DeclareAccident from "../components/DeclareAccident";
import AdminLogin from "../components/AdminLogin";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Landing} />
          <Route path="/admin-login" exact={true} component={AdminLogin} />
          <Route path="/mapstate" exact={true} component={MapCurrentState} />
          <Route path="/declare" exact={true} component={DeclareAccident} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
