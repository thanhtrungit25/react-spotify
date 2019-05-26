import MainHeader from './component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    viewType: state.songsReducer.viewType,
    headerTitle: state.uiReducer.title,
    playplists: state.playlistReducer.playlists
  };
};

export default connect(mapStateToProps)(MainHeader);
