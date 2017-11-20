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
        <iframe className='embed-responsive-item' src={'https://www.youtube.com/embed/mUSEAty85vw'} allowFullScreen />
      </div>

    )
  }



  
}