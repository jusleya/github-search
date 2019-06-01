import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./views/Home";
import Login from "./views/Login";
import NotFound from "./views/404";

import "./assets/css/index.css";

// import withConsumer from "./components/AppContext/withConsumer";

const Routes = () => (
  <Router>
    <ScrollToTop>
      <main>
        {/* HEADER */}
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
        {/* /HEADER */}
      </main>
    </ScrollToTop>
  </Router>
);

export default Routes;
