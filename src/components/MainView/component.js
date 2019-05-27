import React from 'react';
import SongList from '../SongList';
import AlbumList from '../AlbumList';
import ArtistList from '../ArtistList';
import './MainView.css';

const MainView = ({ audioControl, headerTitle, pauseSong, resumeSong }) => (
  <div>
    {headerTitle === 'Albums' ? (
      <AlbumList audioControl={audioControl} />
    ) : headerTitle === 'Artists' ? (
      <ArtistList />
    ) : (
      <SongList
        audioControl={audioControl}
        pauseSong={pauseSong}
        resumeSong={resumeSong}
      />
    )}
  </div>
);

export default MainView;
