import React from 'react';
import PropTypes from 'prop-types';
import PageLink from '../containers/PageLink';

const Pages = ({currentPage, countOfPages, url, children}) => {
  let num = countOfPages > 9
    ? 9
    : countOfPages;
  let arr = new Array(num).fill(undefined);
  let prev = children[0];
  let next = children[1];
  let pageForm = children[2];
  return (
    <div>
      <p>Page {currentPage}
        from {countOfPages}</p>
      <div className="container">
        <div className="page-container">
          {prev}
          {arr.map((item, index) => (
            <PageLink url={url} key={index}>{currentPage + num < countOfPages - currentPage
                ? currentPage + index
                : countOfPages + index + 1 - arr.length}</PageLink>
          ))}
          {next}
        </div>
        {pageForm}
      </div>
    </div>
  )
}

Pages.propTypes = {
  children: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  countOfPages: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}

export default Pages;