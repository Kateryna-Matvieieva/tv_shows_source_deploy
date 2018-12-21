import React from 'react'
import { connect } from 'react-redux'
import {  } from '../actions/actions'

let SearchForm = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch() //action creater
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Search TV Show</button>
      </form>
    </div>
  )
}
SearchForm = connect()(SearchForm)

export default SearchForm
