import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setURL, setFilter} from '../actions/actions';
import {loadData, loadGenres} from '../actions/asyncActions';
import SearchForm from './SearchForm';
import FilterLink from './FilterLink';
import SortForm from './SortForm';

class Header extends Component {
  componentDidMount() {
    this
      .props
      .onLoad()
  }
  render() {
    return (
      <header>
        <h1>Your favorite TV-shows</h1>
        <div className="filter-container">
          <div>
            <FilterLink>Popular</FilterLink>
            <FilterLink>On the air</FilterLink>
            <FilterLink>Top rated</FilterLink>
          </div>
          <SearchForm/>
        </div>
        <SortForm/>
      </header>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(loadGenres())
      let key = `api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`;
      let src = `https://api.themoviedb.org/3`;
      let url = `${src}/tv/popular?${key}&page=1`;
      dispatch(setURL(url));
      dispatch(setFilter('popular'));
      dispatch(loadData({url}));

    }
  }
}
export default connect(null, mapDispatchToProps)(Header);