import React, { Component } from 'react';
import './SongControls.css';

class SongControls extends Component {
  state = {
    timeElapsed: this.props.timeElapsed
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.songPlaying && nextProps.timeElapsed === 0) {
      clearInterval(this.state.intervalId);
      this.calculateTime();
    }

    this.setState({
      timeElapsed: nextProps.timeElapsed
    });
  }

  calculateTime() {
    const intervalId = setInterval(() => {
      if (this.state.timeElapsed === 30) {
        clearInterval(this.state.intervalId);
        this.props.stopSong();
      } else {
        this.props.increaseSongTime(this.state.timeElapsed + 1);
      }
    }, 1000);

    this.setState({
      intervalId
    });
  }

  render() {
    const showPlay = !this.props.songPlaying
      ? ' fa-play-circle-o '
      : ' fa-pause-circle-o ';

    return (
      <div className="song-player-container">
        <div className="song-details">
          <p className="song-name">{this.props.songName}</p>
          <p className="artist-name">{this.props.artistName}</p>
        </div>

        <div className="song-controls">
          <div className="reverse-song">
            <i className="fa fa-step-backward reverse" aria-hidden="true" />
          </div>

          <div className="play-btn">
            <i className={'fa play-btn' + showPlay} aria-hidden="true" />
          </div>

          <div className="next-song">
            <i className="fa fa-step-forward forward" aria-hidden="true" />
          </div>
        </div>

        <div className="song-progress-container">
          <p className="timer-start">{this.state.timeElapsed}</p>
          <div className="song-progress">
            <div
              style={{ width: this.state.timeElapsed * 16.5 }}
              className="song-expired"
            />
          </div>
          <p className="timer-end">{30 - this.state.timeElapsed}</p>
        </div>
      </div>
    );
  }
}

export default SongControls;
