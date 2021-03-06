export const artistsReducer = (
  state = {
    artistIds: ''
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_ARTISTS_PENDING':
      return {
        ...state,
        fetchArtistsPending: true
      };

    case 'FETCH_ARTISTS_SUCCESS':
      return {
        ...state,
        artists: action.artists,
        fetchArtistsError: false,
        fetchArtistsPending: false
      };

    case 'FETCH_ARTISTS_ERROR':
      return {
        ...state,
        fetchArtistsError: true,
        fetchArtistsPending: false
      };

    case 'SET_ARTIST_IDS':
      return {
        ...state,
        artistIds: action.artistIds
      };

    default:
      return state;
  }
};

export default artistsReducer;
