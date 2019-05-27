import MainHeader from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../../actions/browseActions';
import { updateHeaderTitle } from '../../actions/uiActions';
import { updateViewType } from '../../actions/songActions';
import { fetchNewReleases, fetchFeatured } from '../../actions/browseActions';

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
      fetchCategories,
      updateHeaderTitle,
      updateViewType,
      fetchNewReleases,
      fetchFeatured
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeader);
