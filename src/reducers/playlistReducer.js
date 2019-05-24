export const playlistReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PLAYLIST_SUCCESS':
      return {
        ...state,
        playlists: action.playlists,
        fetchPlaylistError: false
      };

    case 'FETCH_PLAYLIST_ERROR':
      return {
        ...state,
        fetchPlaylistError: true
      };

    default:
      return state;
  }
};

export default playlistReducer;
