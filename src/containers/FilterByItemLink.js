import {connect} from 'react-redux';
import {loadData} from '../actions/asyncActions';
import FilterByItem from '../components/FilterByItem';
import {setURL, setFilter, setPage} from '../actions/actions';

function mapStateToProps(state) {
  return {currentPage: state.currentPage, countOfPages: state.countOfPages}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: ({filterType, id, name}) => {
      let key = `api_key=696d475c5616f9c15214877fbdf5bd6e&language=en-US`;
      let src = `https://api.themoviedb.org/3`;
      let url = `${src}/tv/${id}/${filterType}?&${key}`;
      dispatch(setURL(url));
      dispatch(setFilter(filterType, name));
      dispatch(setPage({page: 1}));
      dispatch(loadData({url}));
    }
  }
}

const FilterByItemLink = connect(mapStateToProps, mapDispatchToProps)(FilterByItem);

export default FilterByItemLink;