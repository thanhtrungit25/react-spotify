export const songsReducer = (
  state = {
    fetchSongsPending: true,
    songPlaying: false,
    timeElapsed: 0,
    songId: 0
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_SONGS_PENDING':
      return {
        ...state,
        fetchSongsPending: true
      };
    case 'FETCH_SONGS_SUCCESS':
      return {
        ...state,
        songs: action.songs,
        fetchSongsError: false,
        fetchSongsPending: false
      };
    case 'FETCH_SONGS_ERROR':
      return {
        ...state,
        fetchSongsError: true,
        fetchSongsPending: false
      };
    case 'FETCH_RECENTLY_PLAYED_PENDING':
      return {
        ...state,
        fetchRecentlyPlayedPending: true
      };
    case 'FETCH_RECENTLY_PLAYED_SUCCESS':
      return {
        ...state,
        songs: action.songs,
        fetchRecentlyPlayedPending: false,
        fetchRecentlyPlayedError: false
      };
    case 'FETCH_RECENTLY_PLAYED_ERROR':
      return {
        ...state,
        fetchRecentlyPlayedPending: false,
        fetchRecentlyPlayedError: true
      };

    case 'FETCH_PLAYLIST_SONGS_PENDING':
      return {
        ...state,
        fetchSongsPending: true
      };
    case 'FETCH_PLAYLIST_SONGS_SUCCESS':
      return {
        ...state,
        songs: action.songs,
        fetchSongsError: false,
        fetchSongsPending: false
      };
    case 'FETCH_PLAYLIST_SONGS_ERROR':
      return {
        ...state,
        fetchSongsError: true,
        fetchPSongsPending: false
      };
    case 'PLAY_SONG':
      return {
        ...state,
        songPlaying: true,
        songDetails: action.song,
        timeElapsed: 0,
        songId: action.song.id
      };
    case 'STOP_SONG':
      return {
        ...state,
        songPlaying: false,
        songDetails: null,
        timeElapsed: 0
      };
    case 'INCREASE_SONG_TIME':
      return {
        ...state,
        timeElapsed: action.time
      };
    default:
      return state;
  }
};

export default songsReducer;
