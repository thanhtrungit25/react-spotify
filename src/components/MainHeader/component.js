import React from 'react';
import './MainHeader.css';

const MainHeader = ({ songPlaying, pauseSong, headerTitle }) => {
  return (
    <div>
      <h2 className="section-title">{headerTitle}</h2>

      <button onClick={pauseSong} className="main-pause-play-btn">
        {!songPlaying ? 'PLAY' : 'PAUSE'}
      </button>
    </div>
  );
};

export default MainHeader;
