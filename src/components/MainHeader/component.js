import React from 'react';
import './MainHeader.css';

const MainHeader = ({
  songPlaying,
  songPaused,
  pauseSong,
  resumeSong,
  headerTitle,
  viewType,
  playplists
}) => {
  let currentPlaylist;

  if (viewType === 'playlist') {
    currentPlaylist = playplists.filter(playlist => {
      return playlist.name === headerTitle;
    })[0];
  }

  return (
    <div>
      <div className="section-title">
        {viewType === 'playlist' && (
          <div className="playlist-title-container">
            <div className="playlist-image-container">
              <img
                className="playlist-image"
                src={
                  currentPlaylist.images[0]
                    ? currentPlaylist.images[0].url
                    : null
                }
                alt="playlist"
              />
            </div>

            <div className="playlist-info-container">
              <p className="playlist-text">PLAYLIST</p>
              <h3 className="header-title">{headerTitle}</h3>
              <p className="created-by">
                Created By:{' '}
                <span className="lighter-text">
                  {currentPlaylist.owner.display_name}
                </span>
                - {currentPlaylist.tracks.total} songs
              </p>
              <button
                onClick={!songPaused ? pauseSong : resumeSong}
                className="main-pause-play-btn"
              >
                {songPaused ? 'PLAY' : 'PAUSE'}
              </button>
            </div>
          </div>
        )}

        {(viewType === 'songs' || headerTitle === 'Recently Played') && (
          <div>
            <h3 className="header-title">{headerTitle}</h3>
            <button
              onClick={!songPaused ? pauseSong : resumeSong}
              className="main-pause-play-btn"
            >
              {songPaused ? 'PLAY' : 'PAUSE'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainHeader;
