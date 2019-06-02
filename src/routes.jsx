import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./views/Home";
import LayoutResult from "./views/LayoutResult";
import ScrollToTop from "./components/ScrollToTop";

import "./assets/css/index.css";

const Routes = () => (
  <Router>
    <ScrollToTop>
      <main>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resultado" component={LayoutResult} />
          </Switch>
        </div>
      </main>
    </ScrollToTop>
  </Router>
);

export default Routes;
