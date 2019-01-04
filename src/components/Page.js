import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children, onClick, currentPage, countOfPages, url }) => {

  return (
    <a
      href="/"
      onClick={e => {
      e.preventDefault();
      let page;
      switch (children) {
        case 'next':
          currentPage < countOfPages
            ? onClick({
              page: currentPage + 1,
              url
            })
            : page = countOfPages;
          break;
        case 'prev':
          currentPage > 1
            ? onClick({
              page: currentPage - 1,
              url
            })
            : page = 1;
          break;
        default:
          break;
      }
      if (typeof children == 'number') 
        onClick({page: children, url});
      }}>
      <button>{ children }</button>
    </a>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  countOfPages: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}

export default Page;