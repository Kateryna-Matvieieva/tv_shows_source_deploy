import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import FilterLink from './FilterLink';
import SortForm from './SortForm';

export default class Header extends Component {
  render() {
    return (
      <header>
          <h1>Your favorite TV-shows</h1>
          <FilterLink>Popular</FilterLink>
          <FilterLink>On the air</FilterLink>
          <FilterLink>Top rated</FilterLink>
          <SearchForm />
          <SortForm />
      </header>
    );
  }
}

