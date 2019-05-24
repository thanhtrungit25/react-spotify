export const getUserSuccess = user => {
  return {
    type: 'GET_USER_SUCCESS',
    user
  };
};

export const getUserError = user => {
  return {
    type: 'GET_USER_ERROR'
  };
};

export const getUser = accessToken => {
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
        dispatch(getUserSuccess(user));
      })
      .catch(err => {
        dispatch(getUserError());
      });
  };
};
