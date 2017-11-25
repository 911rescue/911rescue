import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';

const sources = { introVideo: '../../../media/introVideo.mp4' }

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      source: sources['introVideo'] 
    };
  }

  componentDidMount() {
    console.log('state', this.state);
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    this.setState({ player: state });
  }

  render(){
    return(
      <div>
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=mUSEAty85vw&feature=youtu.be' playing/> */}
        {/* <video width='560' height='340'>
          <source src='../../../media/introVideo.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        </video> */}
        <Player
          ref="player"
          autoPlay
        >
          <source src={this.state.source} />
        </Player>
      </div>

    )
  }
}