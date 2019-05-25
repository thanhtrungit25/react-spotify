import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { setToken } from './actions/tokenActions';
import './App.css';

import UserDetails from './components/UserDetails';
import SideMenu from './components/SideMenu';
import UserPlaylists from './components/UserPlaylists';
import ArtWork from './components/ArtWork';
import UserSongs from './components/UserSongs';
import SongControls from './components/SongControls';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.fetchUser(nextProps.token);
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    var hashParams = {};

    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);

    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      // scope
      // user-read-private // user-read-email // playlist-read-private // user-library-read // user-library-modify // user-follow-read
      window.location.href =
        'https://accounts.spotify.com/authorize?client_id=06f0c98364d948048c214c9e3ac2fc12&scope=user-read-private%20user-read-email%20user-top-read%20user-read-recently-played%20user-read-playback-state%20user-library-read%20user-library-modify%20user-follow-read%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20playlist-modify-private%20user-follow-read%20user-library-read%20user-library-modify&response_type=token&redirect_uri=http://localhost:3000/callback';
    } else {
      this.props.setToken(hashParams.access_token);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="left-side-section">
            <SideMenu />
            <UserPlaylists />
            <ArtWork />
          </div>

          <div className="main-section">
            <div className="header">
              <UserDetails />
            </div>
            <UserSongs />
          </div>

          <div className="footer">
            <SongControls />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchUser,
      setToken
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
