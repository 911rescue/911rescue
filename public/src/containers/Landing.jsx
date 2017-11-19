import React, { Component } from 'react';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render(){
    return(
      <div>Render Video
        <video autoplay>
          <source src='https://github.com/911rescue/911rescue/media/landingVideo.mov' />
        </video>
      </div>

    )
  }



  
}