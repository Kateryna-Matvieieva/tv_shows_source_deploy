import React, { Component } from 'react'
import './App.css';
import Header from './Header';
import TVTable from './TVTable';
import { connect } from 'react-redux';
import { fetchTableData, fetchGenres } from '../actions/asyncActions';

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
      dispatch(fetchGenres())
        dispatch(fetchTableData({}));

    }
  }
}

export default connect( null,
  mapDispatchToProps
)(App)

