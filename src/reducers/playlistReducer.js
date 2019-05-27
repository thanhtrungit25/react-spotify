export const playlistReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PLAYLIST_MENU_PENDING':
      return {
        ...state,
        fetchPlaylistPending: true
      };
    case 'FETCH_PLAYLIST_MENU_SUCCESS':
      return {
        ...state,
        playlistMenu: action.playlists,
        fetchPlaylistPending: false,
        fetchPlaylistError: false
      };

    case 'FETCH_PLAYLIST_MENU_ERROR':
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
