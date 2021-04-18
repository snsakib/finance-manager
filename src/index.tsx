import React from "react";
import ReactDOM from "react-dom";
import MainNav from "./MainNav/MainNav";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainNav />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
