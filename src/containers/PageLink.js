import {connect} from 'react-redux';
import {loadData} from '../actions/asyncActions';
import {setPage} from '../actions/actions';
import Page from '../components/Page';

function mapStateToProps(state) {
  return {currentPage: state.currentPage, countOfPages: state.countOfPages, url: state.url}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: ({page, url}) => {
      dispatch(setPage({page}));
      dispatch(loadData({url, page}));
    }
  }
}

const PageLink = connect(mapStateToProps, mapDispatchToProps)(Page);

export default PageLink;