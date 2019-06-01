import React, { Component } from "react";

import SearchBar from "../../components/Searchbar";

import "./css/style.css";

class Home extends Component {
  render() {
    return (
      <div id="home-view">
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-3" />
              <div className="column is-6 has-text-centered">
                <h1>
                  Github<span> Search</span>
                </h1>
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
