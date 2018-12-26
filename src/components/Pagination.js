import React from 'react';
import { connect } from 'react-redux';
import ActionLink from './ActionLink';
import PageForm from './PageForm';

const Pagination = ({currentPage, countOfPages}) => {
    let num=  countOfPages > 9 ? 9 : countOfPages;
    let arr = new Array (num).fill(undefined);
    
    return (
      <div>
          <p>Page {currentPage} from {countOfPages}</p>
          <ActionLink>prev</ActionLink>
          {arr.map((item, index) => (
              <ActionLink key={index}>{currentPage < countOfPages-currentPage ? currentPage + index : countOfPages + index +1 - arr.length}</ActionLink>
              ))}
          <ActionLink>next</ActionLink>
          <PageForm />
      </div>
    );
}
function mapStateToProps (state) {
    return {
      currentPage: state.currentPage,
      countOfPages: state.countOfPages
    }
  }
export default connect(mapStateToProps)(Pagination)