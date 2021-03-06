import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { setToken } from './actions/tokenActions';
import {
  playSong,
  pauseSong,
  resumeSong,
  stopSong
} from './actions/songActions';
import './App.css';

import SideMenu from './components/SideMenu';
import UserPlaylists from './components/UserPlaylists';
import ArtWork from './components/ArtWork';
import MainHeader from './components/MainHeader';
import MainView from './components/MainView';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  static audio;

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.fetchUser(nextProps.token);
    }
  }

  componentDidMount() {
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
        'https://accounts.spotify.com/authorize?client_id=de927175d3fc44e1b75422b9525b07d2&scope=user-read-private%20user-read-email%20user-top-read%20user-read-recently-played%20user-read-playback-state%20user-library-read%20user-library-modify%20user-follow-read%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20playlist-modify-private%20user-follow-read%20user-library-read%20user-library-modify&response_type=token&redirect_uri=http://localhost:3000/callback';
    } else {
      this.props.setToken(hashParams.access_token);
    }
  }

  pauseSong = () => {
    if (this.audio) {
      this.props.pauseSong();
      this.audio.pause();
    }
  };

  resumeSong = () => {
    if (this.audio) {
      this.props.resumeSong();
      this.audio.play();
    }
  };

  stopSong = () => {
    if (this.audio) {
      this.props.stopSong();
      this.audio.pause();
    }
  };

  audioControl = song => {
    if (this.audio === undefined) {
      this.props.playSong(song.track);
      this.audio = new Audio(song.track.preview_url);
      this.audio.play();
    } else {
      this.audio.pause();
      this.props.stopSong();
      this.props.playSong(song.track);
      this.audio = new Audio(song.track.preview_url);
      this.audio.play();
    }
  };

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
            <Header />
            <div className="user-songs-container">
              <MainHeader
                pauseSong={this.pauseSong}
                resumeSong={this.resumeSong}
              />
              <MainView
                audioControl={this.audioControl}
                pauseSong={this.pauseSong}
                resumeSong={this.resumeSong}
              />
            </div>
          </div>

          <Footer
            pauseSong={this.pauseSong}
            resumeSong={this.resumeSong}
            stopSong={this.stopSong}
          />
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
      setToken,
      playSong,
      pauseSong,
      resumeSong,
      stopSong
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
