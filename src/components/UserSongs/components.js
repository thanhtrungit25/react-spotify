import React from 'react';
import './UserSongs.css';

class UserSongs extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    if (nextProps.token !== '' && nextProps.songs === '') {
      console.log('in here');
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
      return (
        <li className="user-song-item" key={song.track.id}>
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

        {this.props.songs && this.renderSongs()}
      </div>
    );
  }
}

export default UserSongs;
