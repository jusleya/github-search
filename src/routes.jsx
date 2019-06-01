import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./views/Home";
import NotFound from "./views/404";
import Result from "./views/Result";
import ScrollToTop from "./components/ScrollToTop";

import "./assets/css/index.css";

const Routes = () => (
  <Router>
    <ScrollToTop>
      <main>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resultado" component={Result} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
    </ScrollToTop>
  </Router>
);

export default Routes;
