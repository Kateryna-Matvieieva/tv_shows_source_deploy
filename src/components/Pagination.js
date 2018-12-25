import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionLink from './ActionLink'

class Pagination extends Component {
  render() {
    let num=  this.props.countOfPages> 9 ? 9 : this.props.countOfPages;
    let arr = new Array (num).fill(undefined);
    
    return (
      <div>
          <p>Page {this.props.currentPage} from {this.props.countOfPages}</p>
          <ActionLink>prev</ActionLink>
          {arr.map((item, index) => (
              <ActionLink key={index}>{this.props.currentPage+index}</ActionLink>
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