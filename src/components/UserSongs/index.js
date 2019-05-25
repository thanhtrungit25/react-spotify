import UserSongs from './components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSongs, playSong } from '../../actions/songActions';

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    songs: state.songsReducer.songs ? state.songsReducer.songs : '',
    fetchSongsPending: state.songsReducer.fetchSongsPending,
    fetchSongsError: state.songsReducer.fetchSongsError
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSongs,
      playSong
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSongs);
