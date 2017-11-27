import React, { Component } from 'react';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render(){
    return(
      <div>
        <video id='introVid' autoPlay>
          <source src='/media/introVideo.mp4' type='video/mp4' />
        </video>
        <div id='introMsg'>
          <h1>911 Rescue</h1>
          <p>Message Goes Here</p>
        </div>
      </div>
    )
  }
}