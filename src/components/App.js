import React, { Component } from 'react'
import './App.css';
import Header from './Header';
import TVTable from './TVTable';
import { connect } from 'react-redux';
import { setURL, setFilter } from '../actions/actions';
import { loadData, loadGenres } from '../actions/asyncActions';

class App extends Component {
  componentDidMount() {
    this.props.onLoad()
  }
  render() {
    return (
      <div>
        <Header />
        <TVTable />
      </div>
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
        dispatch(setURL(url))
        dispatch(setFilter('popular'))
        dispatch(loadData({ url }));

    }
  }
}

export default connect( null,
  mapDispatchToProps
)(App)

