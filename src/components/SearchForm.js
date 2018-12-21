import React from 'react'
import { connect } from 'react-redux'
import { fetchTableData } from '../actions/actions'

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
          dispatch(fetchTableData({ query: input.value }))
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
