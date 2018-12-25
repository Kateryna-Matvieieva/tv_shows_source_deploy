import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, onClick, currentPage }) => {
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
            case 'Top':
                onClick({ filterType: 'top_rated' });
                break;
            case 'next':
                page = ++currentPage;
                onClick({ page });
                break;
            case 'prev':
                page = --currentPage;
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