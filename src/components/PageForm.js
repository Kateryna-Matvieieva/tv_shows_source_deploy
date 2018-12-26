import React from 'react'
import { connect } from 'react-redux'
import { fetchTableData } from '../actions/asyncActions'

let PageForm = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit ={e => {
            e.preventDefault()
            if (!input.value.trim() ||  typeof +input.value.trim() !== 'number') {
              return
            }
            
            dispatch(fetchTableData({ page: input.value.trim()}))
            input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Go to page</button>
      </form>
    </div>
  )
}
PageForm = connect()(PageForm)

export default PageForm
