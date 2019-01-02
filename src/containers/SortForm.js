import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { loadData } from '../actions/asyncActions';
import { setURL, setPage, setFilter } from '../actions/actions';

let SortForm = ({ dispatch, genres }) => {
  
  let year;
  let withGenre;
  let withoutGenre;
  let sortBy;
  let options = Object.entries(genres);
  let handler = (e) => {
    console.log('sort', withGenre);
    e.preventDefault();
    let filter = [];
    let params = '';
    if (year.value) {
      filter.push(`${year.value} year release`);
      params += `&first_air_date_year=${year.value}`;
    }
    if (withGenre.state.value){
      filter.push(`with ${withGenre.state.value.map((item => item.label)).join(',')} genres`);
      params += `&with_genres=${withGenre.state.value.map((item => item.value)).join(',')}`;
    }
    if (withoutGenre.state.value){
      filter.push(`without ${withGenre.state.value.map((item => item.label)).join(',')} genres`);
      params += `&without_genres=${withoutGenre.state.value.map((item => item.value)).join(',')}`;
    }
    if (sortBy.state.value) {
      filter.push(`sort by ${sortBy.state.value.map((item => item.label)).join('')}`);
      params += `&sort_by=${sortBy.state.value.map((item => item.value)).join('')}`;
    }
    let key = `api_key=696d475c5616f9c15214877fbdf5bd6e`;
    let src = `https://api.themoviedb.org/3`;
    let url = `${src}/discover/tv?language=en-US${params}&${key}`;
    dispatch(setURL(url));
    dispatch(setPage({page: 1}));
    dispatch(setFilter(`${filter.join(', ')}`))
    dispatch(loadData({ url }));
  }

  return (
    <div>
      <form
        onSubmit ={e => {
          handler(e)
        }}
      >

        <label for="with_genres">With genres</label>
        <Select name="with_genres" isMulti = {true} ref={node => {
              withGenre = node
            }}
            options = {options.map((item, index) => ({
              value: item[0],
              label: item[1]  
            })
        )}/>

        <label for="without_genres">Without genres</label>
        <Select name="without_genres" isMulti = {true} ref={node => {
              withoutGenre = node
            }}
            options = {options.map((item, index) => ({
              value: item[0],
              label: item[1]  
            })
        )}/>

        <div className="select-class">
        <label for="Sort">Sort</label>
        <Select name="Sort"
            ref={node => {
                sortBy = node
            }} options = {[
              {value: "first_air_date.desc", label: "The newest"},
              {value: "first_air_date.asc", label: "The oldest"},
              {value: "vote_average.desc", label: "Most voted"},
              {value: "vote_average.asc", label: "Less voted"},
              {value: "popularity.asc", label: "Less popular"}
            ]}
        /></div>
        <input
          ref={node => {
            year = node
          }}
        />
        <button type="submit">Sort TV Show</button>
      </form>
    </div>
  )
}

function mapStateToProps (state) {
    return {
      genres: state.genres
    }
  }
SortForm = connect(mapStateToProps)(SortForm)

export default SortForm
