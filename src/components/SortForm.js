import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions/asyncActions'
import { setURL, setQuery, setPage } from '../actions/actions';

let SortForm = ({ dispatch, genres }) => {
  let year;
  let withGenre;
  let withoutGenre;
  let sortBy;
  let options = Object.entries(genres);
  let handler = (e) => {
    e.preventDefault();
    console.log()
    let params = '';

    let key = `api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`;
    let src = `https://api.themoviedb.org/3`;
    let url = `${src}/discover/tv?${key}`;
  }

  return (
    <div>
      <form
        onSubmit ={e => {
          handler(e)
        }}
      >
        <select
            ref={node => {
                withGenre = node
            }} multiple>
            {options.map((item, index) => (<option value={item[0]}>{item[1]}</option>))}
        </select>
        <select
            ref={node => {
                withoutGenre = node
            }} multiple>
            {options.map((item, index) => (<option value={item[0]}>{item[1]}</option>))}
        </select>
        <select
            ref={node => {
                sortBy = node
            }}>
            <option value="vote_average.desc">By vote average to decrease</option>
            <option value="vote_average.asc">By vote average to increase</option>
            <option value="popularity.desc">By popularity to decrease</option>
            <option value="popularity.asc">By popularity to increase</option>
        </select>
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
