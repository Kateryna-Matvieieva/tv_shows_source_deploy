import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ children, onClick }) => {

  return (
    <a
      href="/"
      onClick={e => {
      e.preventDefault();
      switch (children) {
        case 'Popular':
          onClick({ filterType: 'popular' });
          break;
        case 'On the air':
          onClick({ filterType: 'on_the_air' });
          break;
        case 'Top rated':
          onClick({ filterType: 'top_rated' });
          break;
        default:
          break;
      }
    }}>
      <button>{ children }</button>
    </a>
  )
}

Filter.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Filter;