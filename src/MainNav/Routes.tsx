import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";

const Routes = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
