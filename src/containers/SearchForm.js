import React from 'react';
import {connect} from 'react-redux';
import {loadData} from '../actions/asyncActions';
import {setURL, setQuery, setPage} from '../actions/actions';

let SearchForm = ({dispatch}) => {
  let input;
  let handler = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return
    }
    let key = `api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`;
    let src = `https://api.themoviedb.org/3`;
    let query = encodeURIComponent(input.value.trim());
    let url = `${src}/search/tv?query=${query}&${key}`;
    dispatch(setURL(url));
    dispatch(setPage({page: 1}));
    dispatch(setQuery(query));
    dispatch(loadData({url}));
  }

  return (
    <div>
      <form
        onChange=
        {e => { handler(e) }}
        onSubmit
        ={e => {
        handler(e);
        input.value = '';
      }}>
        <label for="title">Search</label>
        <input
          name="title"
          placeholder="Type title of TV Show"
          ref={node => {
          input = node
        }}/>
        <button className="submit-buttom" type="submit">Search TV Show</button>
      </form>
    </div>
  )
}
SearchForm = connect()(SearchForm);

export default SearchForm;
