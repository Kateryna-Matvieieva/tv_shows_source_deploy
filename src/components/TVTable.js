import React from 'react';
import PropTypes from 'prop-types';
import TVShows from './TVShows';
import Pagination from './Pagination';
import {connect} from 'react-redux';

const TVTable = ({state}) => {
  if (state.error) {
    return (
      <div class="no-data-container">
        <img
          src="https://webmarketingschool.com/wp-content/uploads/2018/03/nojobsfound.png"
          alt="Sorry, here is an error"/>
      </div>
    )
  }
  if (state.loading) {
    return (
      <div class="no-data-container">
        <img
          src="https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif"
          alt="Loading..."/>
      </div>
    )
  }
  return (
    <div class="tv-table">
      <h2>{state.query
          ? `The result on "${state.query}" query search`
          : state.name
            ? `TV Shows ${state.filter} to ${state.name}`
            : `TV Shows filtered by "${state.filter}"`}</h2>
      <Pagination/>
      <table>
        <tbody>
          <tr>
            <th>№</th>
            <th>Title</th>
            <th>Popularity</th>
            <th>Year</th>
            <th>Ganre</th>
            <th>Description</th>
            <th>Details</th>
          </tr>
          {state
            .data
            .map((item, index) => (<TVShows
              key={index}
              item={item}
              img={state.imgs[index]}
              genres={state.genres}
              index={state.currentPage * 20 - 19 + index}/>))}
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

function mapStateToProps(state) {
  return {state: state}
}

export default connect(mapStateToProps)(TVTable);