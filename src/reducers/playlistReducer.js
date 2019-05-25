export const playlistReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PLAYLIST_PENDING':
      return {
        ...state,
        fetchPlaylistPending: true
      };
    case 'FETCH_PLAYLIST_SUCCESS':
      return {
        ...state,
        playlists: action.playlists,
        fetchPlaylistPending: false,
        fetchPlaylistError: false
      };

    case 'FETCH_PLAYLIST_ERROR':
      return {
        ...state,
        fetchPlaylistPending: false,
        fetchPlaylistError: true
      };

    default:
      return state;
  }
};

export default playlistReducer;
