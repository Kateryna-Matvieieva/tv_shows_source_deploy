import {connect} from 'react-redux';
import Pages from '../components/Pages';

function mapStateToProps(state) {
  return {currentPage: state.currentPage, countOfPages: state.countOfPages}
}

const PagesContainers = connect(mapStateToProps)(Pages);

export default PagesContainers;