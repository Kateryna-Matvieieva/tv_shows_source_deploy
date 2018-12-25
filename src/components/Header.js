import React, { Component } from 'react';
import ActionLink from './ActionLink'
import './App.css';
import SearchForm from './SearchForm';

export default class Header extends Component {
  render() {
    return (
      <header>
          <h1>Your favorite TV-shows</h1>
          <ActionLink>Popular</ActionLink>
          <ActionLink>On the air</ActionLink>
          <ActionLink>Top</ActionLink>
          <SearchForm />
      </header>
    );
  }
}

