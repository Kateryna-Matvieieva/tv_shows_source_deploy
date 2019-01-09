import React from 'react';
import TVShows from '../components/TVShows';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import IsError from '../components/IsError';
import Title from '../components/Title';
import {connect} from 'react-redux';

const TVTable = ({ state, title }) => {
  if (state.error) {
    return (
      <IsError />
    )
  }
  if (state.loading) {
    return (
      <Loading />
    )
  }
  return (
    <div className="tv-table">
      <Title state={title}/>
      <Pagination/>
      <table>
        <tbody>
          <tr>
            <th>№</th>
            <th>Title</th>
            <th>Popularity</th>
            <th>Year</th>
            <th>Genre</th>
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
  return {
    title: {query: state.query, name: state.name, filter: state.filter},
    state: state}
}

export default connect(mapStateToProps)(TVTable);