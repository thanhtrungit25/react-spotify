export const fetchUserSuccess = user => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user
  };
};

export const fetchUserError = user => {
  return {
    type: 'FETCH_USER_ERROR'
  };
};

export const fetchUser = accessToken => {
  return dispatch => {
    const request = new Request('https://api.spotify.com/v1/me', {
      headers: new Headers({
        Authorization: 'Bearer ' + accessToken
      })
    });

    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(user => {
        dispatch(fetchUserSuccess(user));
      })
      .catch(err => {
        dispatch(fetchUserError());
      });
  };
};

export const addSongToLibrarySuccess = songId => {
  return {
    type: 'ADD_SONG_TO_LIBRARY_SUCCESS',
    songId
  };
};

export const addSongToLibraryError = () => {
  return {
    type: 'ADD_SONG_TO_LIBRARY_ERROR'
  };
};

export const addSongToLibrary = (accessToken, id) => {
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/me/tracks?ids=${id}`,
      {
        method: 'PUT',
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken
        })
      }
    );

    fetch(request)
      .then(res => {
        if (res.ok) {
          dispatch(addSongToLibrarySuccess(id));
        }
      })
      .catch(err => {
        dispatch(addSongToLibraryError());
      });
  };
};
