import React from 'react';
import './UserSongs.css';

class UserSongs extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.token !== '' &&
      nextProps.fetchSongsPending &&
      !nextProps.fetchSongsError
    ) {
      console.log('componentWillReceiveProps');
      this.props.fetchSongs(nextProps.token);
    }
  }

  msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  renderSongs() {
    return this.props.songs.map(song => {
      const playSong = () => {
        if (song.track.preview_url) {
          const audio = new Audio(song.track.preview_url);
          audio.play();
        }
      };

      return (
        <li onClick={playSong} className="user-song-item" key={song.track.id}>
          <div className="play-song">
            <i className="fa fa-play-circle-o play-btn" aria-hidden="true" />
          </div>

          <div className="song-title">
            <p>{song.track.name}</p>
          </div>
          <div className="song-artist">
            <p>{song.track.artists[0].name}</p>
          </div>
          <div className="song-album">
            <p>{song.track.album.name}</p>
          </div>
          <div className="song-length">
            <p>{this.msToMinutesAndSeconds(song.track.duration_ms)}</p>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="user-songs-container">
        <h2 className="section-title">Songs</h2>

        <button className="main-pause-play-btn">PLAY</button>

        <div className="song-header-container">
          <div className="song-title-header">
            <p>Title</p>
          </div>

          <div className="song-artist-header">
            <p>Artist</p>
          </div>

          <div className="song-album-header">
            <p>Album</p>
          </div>

          <div className="song-length-header">
            <p>
              <i className="fa fa-clock-o" aria-hidden="true" />
            </p>
          </div>
        </div>

        {this.props.songs && this.renderSongs()}
      </div>
    );
  }
}

export default UserSongs;
