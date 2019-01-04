import React, {Component} from 'react';
import SearchForm from '../containers/SearchForm';
import FilterLink from '../containers/FilterLink';
import SortForm from '../containers/SortForm';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Your favorite TV-shows</h1>
        <div class="filter-container">
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
