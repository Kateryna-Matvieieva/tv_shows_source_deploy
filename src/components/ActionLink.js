import { connect } from 'react-redux';
import {  } from '../actions/actions';
import Link from './Link';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
        dispatch();
    }
  }
}

const ActionLink = connect( null,
  mapDispatchToProps
)(Link)

export default ActionLink