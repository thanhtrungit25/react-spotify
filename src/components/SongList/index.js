import SongList from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSongs, playSong, stopSong } from '../../actions/songActions';

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    songs: state.songsReducer.songs ? state.songsReducer.songs : '',
    fetchSongsPending: state.songsReducer.fetchSongsPending,
    fetchSongsError: state.songsReducer.fetchSongsError,
    songPlaying: state.songsReducer.songPlaying,
    songId: state.songsReducer.songId
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSongs,
      playSong,
      stopSong
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
