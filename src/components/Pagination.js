import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionLink from './ActionLink'

class Pagination extends Component {
  render() {
    let arr = new Array (9).fill(undefined);
    
    return (
      <div>
          <p>Page {this.props.currentPage} from {this.props.countOfPages}</p>
          <ActionLink>prev</ActionLink>
          {arr.map((item, index) => (
              <ActionLink>{this.props.currentPage+index}</ActionLink>
              ))}
          <ActionLink>next</ActionLink>
      </div>
    );
  }
}
function mapStateToProps (state) {
    return {
      currentPage: state.currentPage,
      countOfPages: state.countOfPages
    }
  }
export default connect(mapStateToProps)(Pagination)