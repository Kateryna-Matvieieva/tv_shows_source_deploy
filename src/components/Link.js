import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, showId, onClick, currentPage, countOfPages, name }) => {
   
    return (
        <a
        href="/"
        onClick={e => {
            e.preventDefault();
            let page;
            switch(children) {
                case 'Popular':
                    onClick({ filterType: 'popular' });
                    break;
                case 'On the air':
                    onClick({ filterType: 'on_the_air'});
                    break;
                case 'Top rated':
                    onClick({ filterType: 'top_rated' });
                    break;
                case 'Recommendations':
                    onClick({ filterType: 'recommendations', id: showId, name });
                    break;
                case 'Similar':
                    onClick({ filterType: 'similar', id: showId, name });
                    break;
                case 'next':
                    currentPage < countOfPages ? page = ++currentPage : page = countOfPages;
                    onClick({ page });
                    break;
                case 'prev':
                    currentPage > 1 ? page = --currentPage : page = 1;
                    onClick({ page });
                    break;
                default:
                    break;
            }
            if(typeof children == 'number')
            onClick({ page:  children });
            
        }}
        >
        <button>{children}</button>
        </a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link