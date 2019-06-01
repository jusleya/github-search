import React, { Component } from 'react';

import SearchBar from '../../components/Searchbar';

import followers from "./img/followers-icon.svg";
import img from "./img/ex.png";
import location from "./img/location-icon.svg";
import organization from "./img/organization-icon.svg";
import repositorie from "./img/repositorie-icon.svg";
import star from "./img/star-icon.svg";
import "./css/style.css";

class LayoutResult extends Component {
  render() {
    return (
      <div id="result-view">
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <h1>
                  Github<span> Search</span>
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
                    <img className="img" src={img} alt=""/>
                    <p className="name">Darth Vader</p>
                    <p className="info">anakinskywalker</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <p className="info margin">
                      <img className="icon" src={organization} alt=""/>
                      The Galactic Empire
                    </p>
                    <p className="info margin">
                      <img className="icon" src={location} alt=""/>
                      Tatooine
                    </p>
                    <p className="info margin">
                      <img className="icon" src={star} alt=""/>
                      1.000.000
                    </p>
                    <p className="info margin">
                      <img className="icon" src={repositorie} alt=""/>
                      4
                    </p>
                    <p className="info margin">
                      <img className="icon" src={followers} alt=""/>
                      999.999.999
                    </p>
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

export default LayoutResult;