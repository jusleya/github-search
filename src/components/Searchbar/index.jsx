import React from "react";
import PropTypes from "prop-types";

import icon from "./img/search-icon.svg";
import "./css/style.css";

const SearchBar = props => {
  return (
    <div id="search-bar-component">
      <form onSubmit={props.onSubmit}>
        <div className="field has-addons">
          <div className="control size-field">
            <input
              className="input"
              type="text"
              placeholder={props.placeholder}
              name="username"
              onChange={props.onChange}
              value={props.value}
            />
          </div>
          <div className="control">
            <button type="submit" className="button btn">
              <img src={icon} alt=""/>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string
};

export default SearchBar;
