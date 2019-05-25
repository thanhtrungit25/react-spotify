import React from 'react';
import './SideMenu.css';

class SideMenu extends React.Component {
  renderSideMenu() {
    const menu = [
      {
        name: 'Recently Played',
        action: this.props.fetchRecentlyPlayed
      },
      {
        name: 'Songs',
        action: this.props.fetchSongs
      },
      {
        name: 'Albums',
        action: this.props.fetchAlbums
      },
      {
        name: 'Artists',
        action: this.props.fetchArtists
      }
    ];

    return menu.map(item => {
      return (
        <li
          key={item.name}
          onClick={() => {
            item.action(this.props.token);
          }}
          className="side-menu-item"
        >
          {item.name}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="side-menu-container">
        <h3 className="user-library-header">Your Library</h3>
        {this.renderSideMenu()}
      </ul>
    );
  }
}

export default SideMenu;
