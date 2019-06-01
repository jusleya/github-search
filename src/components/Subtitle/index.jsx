import React from 'react';
import PropTypes from 'prop-types';
import './css/style.css';

const Subtitle = (props) => {
  return (
    <div id="subtitle-component">
      <h2>{props.title}</h2>
    </div>
  );
}

Subtitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default Subtitle;