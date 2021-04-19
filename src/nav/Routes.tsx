import React from "react";
import { Switch, Route } from "react-router-dom";
import Accounts from "../pages/Accounts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/accounts" component={Accounts} />
    </Switch>
  );
};

export default Routes;
