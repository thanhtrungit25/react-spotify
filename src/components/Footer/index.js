import React from 'react';
import SongControls from '../SongControls';
import './Footer.css';

export default function Footer({ pauseSong, resumeSong, stopSong }) {
  return (
    <div className="footer">
      <SongControls
        pauseSong={pauseSong}
        resumeSong={resumeSong}
        stopSong={stopSong}
      />
    </div>
  );
}
