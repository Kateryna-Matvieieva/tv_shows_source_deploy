import { connect } from 'react-redux';
import { fetchTableData } from '../actions/asyncActions';
import Link from './Link';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: ({type, prev, page, next, query}) => {
        dispatch(fetchTableData({type, prev, page, next, query}));
    }
  }
}

const ActionLink = connect( null,
  mapDispatchToProps
)(Link)

export default ActionLink