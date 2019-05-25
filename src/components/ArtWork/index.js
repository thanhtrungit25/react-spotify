import ArtWork from './component';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    albumArtwork: state.songsReducer.songDetails
      ? state.songsReducer.songDetails.album.images[0].url
      : ''
  };
};

export default connect(mapStateToProps)(ArtWork);
