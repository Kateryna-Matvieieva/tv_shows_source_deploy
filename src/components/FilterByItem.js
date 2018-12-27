import React from 'react'
import PropTypes from 'prop-types'

const FilterByItem = ({ children, showId, onClick, name }) => {
   
    return (
        <a
        href="/"
        onClick={e => {
            e.preventDefault();
            switch(children) {
                case 'Recommendations':
                    onClick({ filterType: 'recommendations', id: showId, name });
                    break;
                case 'Similar':
                    onClick({ filterType: 'similar', id: showId, name });
                    break;
                default:
                    break;
            }
        }}
        >
        <button>{children}</button>
        </a>
  )
}

FilterByItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FilterByItem