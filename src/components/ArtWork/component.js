import React, { Component } from 'react';
import './ArtWork.css';

class ArtWork extends Component {
  render() {
    return (
      <div className="album-artwork-container">
        {this.props.albumArtwork && (
          <img
            className="album-artwork"
            src={this.props.albumArtwork}
            alt="altwork"
          />
        )}
      </div>
    );
  }
}

export default ArtWork;
