export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        fetchUserError: false,
        user: action.user
      };
    case 'FETCH_USER_ERROR':
      return {
        fetchUserError: true,
        ...state
      };
    default:
      return state;
  }
};

export default userReducer;
