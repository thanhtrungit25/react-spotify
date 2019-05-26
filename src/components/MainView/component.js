import React from 'react';
import SongList from '../SongList';
import AlbumList from '../AlbumList';
import './MainView.css';

const MainView = ({ audioControl, headerTitle }) => (
  <div>
    {headerTitle === 'Albums' ? (
      <AlbumList />
    ) : (
      <SongList audioControl={audioControl} />
    )}
  </div>
);

export default MainView;
