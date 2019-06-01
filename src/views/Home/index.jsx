import React, { Component } from "react";

import Title from "../../components/Title";

import "./css/style.css";
import SearchBar from "../../components/Searchbar";

class Home extends Component {
  render() {
    return (
      <div id="home-view">
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-3" />
              <div className="column is-6 has-text-centered">
                <Title />
              </div>
              <div className="column is-3" />
            </div>
            <div className="columns is-centered">
              <div className="column is-8">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
