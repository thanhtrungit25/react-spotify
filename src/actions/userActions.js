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
        console.log(user);
        dispatch(fetchUserSuccess(user));
      })
      .catch(err => {
        dispatch(fetchUserError());
      });
  };
};
