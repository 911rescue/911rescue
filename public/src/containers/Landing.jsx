import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta dictum turpis, eu mollis justo gravida ac. Proin non eros blandit, rutrum est a, cursus quam. Nam ultricies, velit ac suscipit vehicula, turpis eros sollicitudin lacus, at convallis mauris magna non justo. Etiam et suscipit elit. Morbi eu ornare nulla, sit amet ornare est. Sed vehicula ipsum a mattis dapibus. Etiam volutpat vel enim at auctor.</p>
          <p>Aenean pharetra convallis pellentesque. Vestibulum et metus lectus. Nunc consectetur, ipsum in viverra eleifend, erat erat ultricies felis, at ultricies mi massa eu ligula. Suspendisse in justo dapibus metus sollicitudin ultrices id sed nisl.</p>
          <Link to='/' class='learnMore'>Learn More</Link>
        </div>
      </div>
    )
  }
}