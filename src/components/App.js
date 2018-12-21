import React, { Component } from 'react'
import './App.css';
import Header from './Header';
import TVTable from './TVTable';
import { connect } from 'react-redux';
import { fetchTableData, fetchgenres } from '../actions/actions';

class App extends Component {
  componentDidMount() {
    this.props.onLoad()
  }
  render() {
    console.log('app props ', );
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
      dispatch(fetchgenres())
        dispatch(fetchTableData());

    }
  }
}

export default connect( null,
  mapDispatchToProps
)(App)

