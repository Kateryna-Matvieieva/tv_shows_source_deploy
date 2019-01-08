import React from 'react';
import PropTypes from 'prop-types';
import PagesContainer from '../containers/PagesContainer';
import PageLink from '../containers/PageLink';
import PageForm from '../containers/PageForm';

const Pagination = ({ url }) => {

  return (
    <div>
        <PagesContainer url={url}>
            <PageLink url={url}>prev</PageLink>
            <PageLink url={url}>next</PageLink>
            <PageForm/>
        </PagesContainer>
     </div>

  );
}

Pagination.propTypes = {
  url: PropTypes.string
}

export default Pagination;