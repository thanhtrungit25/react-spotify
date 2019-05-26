import React from 'react';
import SongList from '../SongList';
import AlbumList from '../AlbumList';
import './MainView.css';

const MainView = ({ audioControl, headerTitle }) => (
  <div>
    {headerTitle === 'Albums' ? (
      <AlbumList audioControl={audioControl} />
    ) : (
      <SongList audioControl={audioControl} />
    )}
  </div>
);

export default MainView;
