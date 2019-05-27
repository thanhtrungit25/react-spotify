import SongList from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSongs, playSong, stopSong } from '../../actions/songActions';
import { addSongToLibrary } from '../../actions/userActions';

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    songs: state.songsReducer.songs ? state.songsReducer.songs : '',
    fetchSongsPending: state.songsReducer.fetchSongsPending,
    fetchSongsError: state.songsReducer.fetchSongsError,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId,
    viewType: state.songsReducer.viewType,
    songAddedId: state.userReducer.songId || ''
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSongs,
      playSong,
      stopSong,
      addSongToLibrary
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
