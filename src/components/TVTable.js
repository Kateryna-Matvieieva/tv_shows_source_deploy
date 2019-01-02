import React from 'react';
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
    <h2>{
      
    }</h2>
    <h2>{state.query ? `The result on "${state.query }" query search` : state.name ? `TV Shows ${state.filter} to ${state.name}`:`TV Shows filtered by "${state.filter}"`}</h2>
    <Pagination />
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
          {state.data.map((item, index) => (
            <TVShows key={index} item={ item } img={state.imgs[index]} genres={state.genres} index={state.currentPage*20-19+index}/>
          ))}
        </tbody>
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