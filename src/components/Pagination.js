import React from 'react';
import { connect } from 'react-redux';
import PageLink from './PageLink';
import PageForm from './PageForm';

const Pagination = ({currentPage, countOfPages, url}) => {
    let num=  countOfPages > 9 ? 9 : countOfPages;
    let arr = new Array (num).fill(undefined);
    
    return (
      <div>
          <p>Page {currentPage} from {countOfPages}</p>
          <PageLink url={url}>prev</PageLink>
          {arr.map((item, index) => (
              <PageLink url={url} key={index}>{currentPage < countOfPages-currentPage ? currentPage + index : countOfPages + index +1 - arr.length}</PageLink>
              ))}
          <PageLink url={url}>next</PageLink>
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