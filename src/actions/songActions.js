import { uniqBy } from 'lodash';

export const fetchSongsPending = () => {
  return {
    type: 'FETCH_SONGS_PENDING'
  };
};

export const fetchSongsSuccess = songs => {
  return {
    type: 'FETCH_SONGS_SUCCESS',
    songs
  };
};

export const fetchSongsError = () => {
  return {
    type: 'FETCH_SONGS_ERROR'
  };
};

export const fetchSongs = accessToken => {
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/me/tracks?limit=50`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken
        })
      }
    );

    dispatch(fetchSongsPending());

    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(fetchSongsSuccess(data.items));
      })
      .catch(err => {
        dispatch(fetchSongsError());
      });
  };
};

export const fetchRecentlyPlayedPending = () => {
  return {
    type: 'FETCH_RECENTLY_PLAYED_PENDING'
  };
};

export const fetchRecentlyPlayedSuccess = songs => {
  return {
    type: 'FETCH_RECENTLY_PLAYED_SUCCESS',
    songs
  };
};

export const fetchRecentlyPlayedError = () => {
  return {
    type: 'FETCH_RECENTLY_PLAYED_ERROR'
  };
};

export const fetchRecentlyPlayed = accessToken => {
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/me/player/recently-played`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken
        })
      }
    );

    dispatch(fetchRecentlyPlayedPending());

    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(res => {
        //remove duplicates from recently played
        res.items = uniqBy(res.items, item => {
          return item.track.id;
        });
        dispatch(fetchRecentlyPlayedSuccess(res.items));
      })
      .catch(err => {
        dispatch(fetchRecentlyPlayedError());
      });
  };
};

export const playSong = song => {
  return {
    type: 'PLAY_SONG',
    song
  };
};

export const stopSong = () => {
  return {
    type: 'STOP_SONG'
  };
};

export const pauseSong = () => {
  return {
    type: 'PAUSE_SONG'
  };
};

export const resumeSong = () => {
  return {
    type: 'RESUME_SONG'
  };
};

export const increaseSongTime = time => {
  return {
    type: 'INCREASE_SONG_TIME',
    time
  };
};

export const updateViewType = view => {
  return {
    type: 'UPDATE_VIEW_TYPE',
    view
  };
};
