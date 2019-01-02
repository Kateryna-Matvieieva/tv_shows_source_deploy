import { connect } from 'react-redux';
import { loadData } from '../actions/asyncActions';
import { setURL, setFilter, setPage } from '../actions/actions';
import Filter from '../components/Filter';
function mapStateToProps (state) {
  return {
    currentPage: state.currentPage,
    countOfPages: state.countOfPages
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: ({filterType}) => {
        let key = `api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`;
        let src = `https://api.themoviedb.org/3`;
        let url = `${src}/tv/${filterType||'popular'}?${key}`;
        dispatch(setURL(url))
        dispatch(setFilter(filterType))
        dispatch(setPage({page: 1}))
        dispatch(loadData({url}))
    }
  }
}

const FilterLink = connect( mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterLink