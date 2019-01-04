import React from 'react';
import PropTypes from 'prop-types';

const Title = ({state}) => {
  return (
    <h2>{state.query
        ? `The result on "${state.query}" query search`
        : state.name
          ? `TV Shows ${state.filter} to "${state.name}"`
          : `TV Shows filtered by "${state.filter}"`}</h2>
  )
}

Title.propTypes = {
    state: PropTypes.object.isRequired
}

export default Title;