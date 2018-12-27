import React from 'react'
import { connect } from 'react-redux'
import { setPage } from '../actions/actions'
import { loadData } from '../actions/asyncActions'

let PageForm = ({ dispatch, url }) => {
  let input;

  return (
    <div>
      <form
        onSubmit ={e => {
            e.preventDefault()
            let page = input.value.trim();          
            if (!page ||  typeof +page !== 'number') {
              return
            }
            dispatch(setPage({ page }))
            dispatch(loadData({ url, page }))
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
function mapStateToProps (state) {
  return {
    url: state.url
  }
}
PageForm = connect(mapStateToProps)(PageForm)

export default PageForm
