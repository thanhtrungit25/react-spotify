import React from 'react';
import './UserPlaylists.css';

class UserPlaylists extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.userId !== '' &&
      nextProps.token !== '' &&
      nextProps.playlists === ''
    ) {
      this.props.fetchPlaylists(nextProps.userId, nextProps.token);
    }
  }

  renderPlaylists() {
    return this.props.playlists.map(playlist => {
      return (
        <li className="user-playlist-item" key={playlist.id}>
          {playlist.name}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="user-playlist-container">
        <h3 className="user-playlist-header">Playlists</h3>
        {this.props.playlists && this.renderPlaylists()}
      </div>
    );
  }
}

export default UserPlaylists;
