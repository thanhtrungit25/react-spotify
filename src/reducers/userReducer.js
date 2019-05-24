export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: action.user
      };
    case 'GET_USER_ERROR':
      return state;
    default:
      return state;
  }
};

export default userReducer;
