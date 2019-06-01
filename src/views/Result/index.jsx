import React, { Component } from 'react';

import SearchBar from '../../components/Searchbar';

import img from "./img/ex.png";
import "./css/style.css";

class Result extends Component {
  render() {
    return (
      <div id="result-view">
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <h1>
                  Github <span>Search</span>
                </h1>
              </div>
              <div className="column is-1" />
              <div className="column is-8">
                <SearchBar />
              </div>
            </div>
            <div className="columns">
              <div className="column is-3">
                <div className="columns">
                  <div className="column">
                    <img src={img} alt=""/>
                  </div>
                </div>
              </div>
              <div className="column is-1" />
              <div className="column is-8">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;