import { connect } from 'react-redux';
import { fetchTableData } from '../actions/actions';
import Link from './Link';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: ({filter, prev, page, next, query}) => {
        dispatch(fetchTableData({filter, prev, page, next, query}));
    }
  }
}

const ActionLink = connect( null,
  mapDispatchToProps
)(Link)

export default ActionLink