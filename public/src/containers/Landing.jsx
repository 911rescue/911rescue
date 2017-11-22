import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render(){
    return(
      <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=mUSEAty85vw&feature=youtu.be' playing/>
      </div>

    )
  }
}