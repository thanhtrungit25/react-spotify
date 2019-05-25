export const albumsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS_PENDING':
      return {
        ...state,
        fetchAlbumsPending: true
      };
    case 'FETCH_ALBUMS_SUCCESS':
      return {
        ...state,
        albums: action.albums,
        fetchAlbumsPending: false,
        fetchAlbumsError: false
      };
    case 'FETCH_ALBUMS_ERROR':
      return {
        ...state,
        etchAlbumsPending: false,
        fetchAlbumsError: true
      };
    default:
      return state;
  }
};

export default albumsReducer;
