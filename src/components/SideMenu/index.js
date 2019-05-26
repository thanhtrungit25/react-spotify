import SideMenu from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAlbums } from '../../actions/albumActions';
import { fetchArtists } from '../../actions/artistActions';
import {
  fetchSongs,
  fetchRecentlyPlayed,
  updateViewType
} from '../../actions/songActions';
import { updateHeaderTitle } from '../../actions/uiActions';

const mapStateToProps = state => {
  return {
    userId: state.userReducer.user ? state.userReducer.user.id : '',
    token: state.tokenReducer.token ? state.tokenReducer.token : ''
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSongs,
      fetchRecentlyPlayed,
      fetchAlbums,
      fetchArtists,
      updateViewType,
      updateHeaderTitle
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
