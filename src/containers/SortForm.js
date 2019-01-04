import React from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {loadData} from '../actions/asyncActions';
import {setURL, setPage, setFilter} from '../actions/actions';

let SortForm = ({dispatch, genres}) => {

  let year,
    withGenre,
    withoutGenre,
    sortBy;
  let options = Object.entries(genres);
  let handler = (e) => {
    e.preventDefault();
    let filter = [];
    let params = '';
    if (sortBy.state.value) {
      filter.push(`${sortBy.state.value.label}`);
      params += `&sort_by=${sortBy.state.value.value}`;
    }
    if (year.value) {
      filter.push(`${year.value} year release`);
      params += `&first_air_date_year=${year.value}`;
    }
    if (withGenre.state.value) {
      filter.push(`with ${withGenre.state.value.map((item => item.label)).join(', ')} genre`);
      params += `&with_genres=${withGenre
        .state
        .value
        .map((item => item.value))
        .join(',')}`;
    }
    if (withoutGenre.state.value) {
      filter.push(`without ${withoutGenre.state.value.map((item => item.label)).join(', ')} genre`);
      params += `&without_genres=${withoutGenre
        .state
        .value
        .map((item => item.value))
        .join(',')}`;
    }

    let key = `api_key=696d475c5616f9c15214877fbdf5bd6e`;
    let src = `https://api.themoviedb.org/3`;
    let url = `${src}/discover/tv?language=en-US${params}&${key}`;
    dispatch(setURL(url));
    dispatch(setPage({page: 1}));
    dispatch(setFilter(`${filter.join(', ')}`));
    dispatch(loadData({url}));
  }

  return (
    <div>
      <form onSubmit ={e => {
        handler(e)
      }}>
        <div class="sort-container">
          <div className="select-class">
            <label for="with_genres">With genres</label>
            <Select
              name="with_genres"
              isMulti={true}
              ref={node => {
              withGenre = node
            }}
              options=
              {options.map((item, index) => ({ value: item[0], label: item[1] }) )}/>
          </div>

          <div className="select-class">
            <label for="without_genres">Without genres</label>
            <Select
              name="without_genres"
              isMulti={true}
              ref={node => {
              withoutGenre = node
            }}
              options=
              {options.map((item, index) => ({ value: item[0], label: item[1] }) )}/>
          </div>

          <div className="select-class">
            <label for="Sort">Sort</label>
            <Select
              name="Sort"
              ref={node => {
              sortBy = node
            }}
              options={[
              {
                value: "first_air_date.desc",
                label: "The newest"
              }, {
                value: "first_air_date.asc",
                label: "The oldest"
              }, {
                value: "vote_average.desc",
                label: "Most voted"
              }, {
                value: "vote_average.asc",
                label: "Less voted"
              }, {
                value: "popularity.asc",
                label: "Less popular"
              }
            ]}/>
          </div>
        </div>
        <div class="sort-container">
          <div className="select-class">
            <label for="year">Year of release</label>
            <input
              name="year"
              placeholder="Type year of release"
              ref={node => {
              year = node
            }}/>
          </div>
          <button className="submit-buttom" type="submit">Sort TV Show</button>
        </div>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {genres: state.genres}
}
SortForm = connect(mapStateToProps)(SortForm);

export default SortForm;
