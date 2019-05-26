import React from 'react';
import './SideMenu.css';

const SideMenu = ({
  fetchRecentlyPlayed,
  fetchSongs,
  fetchAlbums,
  fetchArtists,
  updateHeaderTitle,
  updateViewType,
  token,
  artistIds
}) => {
  const menuItemClicked = name => {
    updateHeaderTitle(name);
    updateViewType(name);
  };

  const renderSideMenu = () => {
    const menu = [
      {
        name: 'Recently Played',
        action: fetchRecentlyPlayed
      },
      {
        name: 'Songs',
        action: fetchSongs
      },
      {
        name: 'Albums',
        action: fetchAlbums
      },
      {
        name: 'Artists',
        action: fetchArtists,
        getArtists: true
      }
    ];

    return menu.map(item => {
      return (
        <li
          key={item.name}
          onClick={() => {
            item.getArtists
              ? item.action(token, artistIds)
              : item.action(token);
            menuItemClicked(item.name);
          }}
          className="side-menu-item"
        >
          {item.name}
        </li>
      );
    });
  };
  return (
    <ul className="side-menu-container">
      <h3 className="user-library-header">Your Library</h3>
      {renderSideMenu()}
    </ul>
  );
};

export default SideMenu;
