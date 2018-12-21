import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, onClick }) => {
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()        
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