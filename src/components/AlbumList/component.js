import React, { Component } from 'react';
import './AlbumList.css';

class AlbumList extends Component {
  renderAlbums() {
    return this.props.songs.map((song, i) => {
      return (
        <li className="album-item" key={i}>
          <div>
            <div className="album-image">
              {song.track.album.images && (
                <img src={song.track.album.images[0].url} alt="album" />
              )}
            </div>
            <div className="album-details">
              <p>{song.track.album.name}</p>
              <p>{song.track.album.artists[0].name}</p>
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
