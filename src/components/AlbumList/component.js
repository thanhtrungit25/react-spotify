import React, { Component } from 'react';
import './AlbumList.css';

class AlbumList extends Component {
  renderAlbums() {
    return this.props.songs.map((song, i) => {
      return (
        <li
          onClick={() => this.props.audioControl(song)}
          className="album-item"
          key={i}
        >
          <div>
            {song.track.album.images && (
              <div className="album-image">
                <img src={song.track.album.images[0].url} alt="album" />
                <div className="play-song">
                  <i
                    className="fa fa-play-circle-o play-btn"
                    aria-hidden="true"
                  />
                </div>
              </div>
            )}
            <div className="album-details">
              <p className="album-name">{song.track.album.name}</p>
              <p className="artist-name">{song.track.album.artists[0].name}</p>
            </div>
          </div>
        </li>
      );
    });
  }
  render() {
    return <ul className="album-view-container">{this.renderAlbums()}</ul>;
  }
}

export default AlbumList;
