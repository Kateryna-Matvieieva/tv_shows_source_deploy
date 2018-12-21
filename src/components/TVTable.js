import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TVShows from './TVShows';
import Pagination from './Pagination';
import { connect } from 'react-redux';

const TVTable = ({ state }) => {
  if (state.error) {
    return <div>Sorry, error</div>
  }
  if (state.loading) {
    return <div>Loading...</div>
  }
  return (
  <div>
    <Pagination />
    <table>
       
    </table>
    <Pagination />
  </div>
  )
}

  function mapStateToProps (state) {
    return {
      state: state
    }
  }
  

export default connect(mapStateToProps)(TVTable)