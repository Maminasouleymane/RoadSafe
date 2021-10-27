import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../components/Landing";
import Accident from "../components/Accident";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Landing} />
          <Route path="/accident" exact={true} component={Accident} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
