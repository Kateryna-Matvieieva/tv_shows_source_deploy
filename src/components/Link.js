import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, showId, onClick, currentPage, countOfPages }) => {
  return (

    <a
      href="/"
      onClick={e => {
        e.preventDefault();
        console.log(showId)
        let page;
         switch(children) {
            case 'Popular':
                onClick({ filterType: 'popular' });
                break;
            case 'On the air':
                onClick({ filterType: 'on_the_air'});
                break;
            case 'Top':
                onClick({ filterType: 'top_rated' });
                break;
            case 'Recommendations':
                onClick({ filterType: 'recommendations', id: showId });
                break;
            case 'Similar':
                onClick({ filterType: 'similar', id: showId });
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