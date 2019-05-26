import React from 'react';
import moment from 'moment';
import './SongList.css';

class SongList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.token !== '' &&
      nextProps.fetchSongsPending &&
      !nextProps.fetchSongsError
    ) {
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
        <li
          onClick={() => this.props.audioControl(song)}
          className={
            song.track.id === this.props.songId
              ? 'active user-song-item'
              : 'user-song-item'
          }
          key={song.track.id}
        >
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
          <div className="song-added">
            <p>{moment(song.added_at).format('YYYY-MM-DD')}</p>
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
      <div>
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

          <div className="song-added-header">
            <p>
              <i className="fa fa-calendar-plus-o" aria-hidden="true" />
            </p>
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

export default SongList;
