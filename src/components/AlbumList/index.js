import AlbumList from './component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    songs: state.songsReducer.songs ? state.songsReducer.songs : ''
  };
};

export default connect(mapStateToProps)(AlbumList);
