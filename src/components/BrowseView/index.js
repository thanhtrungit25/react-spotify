import BrowseView from './component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    categories: state.browseReducer.categories
  };
};

export default connect(mapStateToProps)(BrowseView);
