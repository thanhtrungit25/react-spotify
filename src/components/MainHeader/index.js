import MainHeader from './component';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/browseActions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    viewType: state.songsReducer.viewType,
    headerTitle: state.uiReducer.title,
    playplists: state.playlistReducer.playlists,
    token: state.tokenReducer.token
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchCategories
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeader);
