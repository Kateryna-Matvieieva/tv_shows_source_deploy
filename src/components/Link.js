import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, onClick }) => {
  return (

    <a
      href="/"
      onClick={e => {
        e.preventDefault()
         switch(children) {
            case 'Popular':
                onClick({ filter: 'popular' });
                break;
            case 'On the air':
                onClick({ filter: 'on_the_air'});
                break;
            case 'Top':
                onClick({ filter: 'top_rated' });
                break;
            case 'next':
                onClick({ next: true });
                break;
            case 'prev':
                onClick({ prev: true });
                break;
            default:
                break;
        }
        if(typeof children == 'number')
          onClick({ page:  children });
        
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link