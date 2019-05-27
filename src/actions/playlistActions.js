export const fetchPlaylistMenuSuccess = playlists => {
  return {
    type: 'FETCH_PLAYLIST_MENU_SUCCESS',
    playlists
  };
};

export const fetchPlaylistMenuPending = () => {
  return {
    type: 'FETCH_PLAYLIST_MENU_PENDING'
  };
};

export const fetchPlaylistMenuError = () => {
  return {
    type: 'FETCH_PLAYLIST_MENU_ERROR'
  };
};

export const fetchPlaylistsMenu = (userId, accessToken) => {
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken
        })
      }
    );

    dispatch(fetchPlaylistMenuPending());

    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(playlist => {
        dispatch(fetchPlaylistMenuSuccess(playlist.items));
      })
      .catch(err => {
        dispatch(fetchPlaylistMenuError());
      });
  };
};

export const fetchPlaylistSongsPending = () => {
  return {
    type: 'FETCH_PLAYLIST_SONGS_PENDING'
  };
};

export const fetchPlaylistSongsSuccess = songs => {
  return {
    type: 'FETCH_PLAYLIST_SONGS_SUCCESS',
    songs
  };
};

export const fetchPlaylistSongsError = () => {
  return {
    type: 'FETCH_PLAYLIST_SONGS_ERROR'
  };
};

export const fetchPlaylistSongs = (userId, playlistId, accessToken) => {
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken
        })
      }
    );

    dispatch(fetchPlaylistSongsPending());

    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(fetchPlaylistSongsSuccess(res.items));
      })
      .catch(err => {
        dispatch(fetchPlaylistSongsError());
      });
  };
};
