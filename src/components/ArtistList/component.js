import React, { Component } from 'react';
import './ArtistList.css';

class ArtistList extends Component {
  renderArtists() {
    return this.props.artists.map((artist, i) => {
      return (
        artist.images[0] && (
          <li className="artist-item" key={i}>
            <a href={artist.external_urls.spotify}>
              <div>
                <div className="artist-image">
                  {
                    <img
                      src={artist.images[0] ? artist.images[0].url : ''}
                      alt="artist"
                    />
                  }
                </div>
                <div className="artist-details">
                  <p>{artist.name}</p>
                </div>
              </div>
            </a>
          </li>
        )
      );
    });
  }

  render() {
    return (
      <ul className="artist-view-container">
        {this.props.artists && this.renderArtists()}
      </ul>
    );
  }
}

export default ArtistList;
