export const fetchPlaylistSuccess = playlists => {
  return {
    type: 'FETCH_PLAYLIST_SUCCESS',
    playlists
  };
};

export const fetchPlaylistError = () => {
  return {
    type: 'FETCH_PLAYLIST_ERROR'
  };
};

export const fetchPlaylists = (userId, accessToken) => {
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken
        })
      }
    );

    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(playlist => {
        console.log(playlist);
        dispatch(fetchPlaylistSuccess(playlist.items));
      })
      .catch(err => {
        dispatch(fetchPlaylistError());
      });
  };
};
