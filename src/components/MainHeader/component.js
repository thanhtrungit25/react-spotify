import React from 'react';
import './MainHeader.css';

const MainHeader = ({
  songPlaying,
  pauseSong,
  headerTitle,
  viewType,
  playplists
}) => {
  let currentPlaylist;

  if (viewType === 'playlist') {
    currentPlaylist = playplists.filter(playlist => {
      return playlist.name === headerTitle;
    })[0];

    console.log(currentPlaylist);
  }

  return (
    <div>
      <div className="section-title">
        {viewType === 'playlist' && (
          <div className="playlist-title-container">
            <div className="playlist-image-container">
              <img
                className="playlist-image"
                src={currentPlaylist.images[0].url}
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
              <button onClick={pauseSong} className="main-pause-play-btn">
                {!songPlaying ? 'PLAY' : 'PAUSE'}
              </button>
            </div>
          </div>
        )}

        {viewType === 'songs' && (
          <div>
            <h3 className="header-title">{headerTitle}</h3>
            <button onClick={pauseSong} className="main-pause-play-btn">
              {!songPlaying ? 'PLAY' : 'PAUSE'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainHeader;
