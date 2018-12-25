import { connect } from 'react-redux';
import { fetchTableData } from '../actions/asyncActions';
import Link from './Link';
function mapStateToProps (state) {
  return {
    currentPage: state.currentPage,
    countOfPages: state.countOfPages
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: ({filterType, page, query}) => {
        dispatch(fetchTableData({filterType, page, query}));
    }
  }
}

const ActionLink = connect( mapStateToProps,
  mapDispatchToProps
)(Link)

export default ActionLink