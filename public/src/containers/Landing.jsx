import React, { Component } from 'react';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render(){
    return(
      <div>Render Video
        <video autoPlay>
          <source src='https://github.com/911rescue/911rescue/tree/master/media/introVideo.mov' alt='video goes here'/>
        </video>
      </div>

    )
  }



  
}