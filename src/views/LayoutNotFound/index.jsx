import React, { Component } from "react";

import "./css/style.css";

class LayoutNotFound extends Component {
  render() {
    return (
      <div id="not-found-view">
        <div className="section">
          <div className="container">
            <div className="columns center">
              <div className="column">
                <p>User not found :(</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LayoutNotFound;
