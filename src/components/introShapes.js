import React, { Component } from 'react'
import anime from 'animejs'

class IntroShapes extends Component {
  constructor(props) {
    super(props);
    this.className = props.className;
  }
  componentDidMount() {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
    });
    timeline.add({
      targets: '#rect',
      duration: 900,
      x: [450, 120],
      y: [400, 280],
    }, 0);
    timeline.add({
      // TODO: Get rid of a hacky approach
      targets: '#dashes',
      duration: 1,
      r: [0, 160]
    }, 300);
    timeline.add({
      targets: '#circle',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1300,
      delay: (el, i) => { return i * 250 },
    }, 0);
    timeline.add({
        targets: '#triangle',
        d: 'M 464 392 L 539 255 L 539 255 L -0 47 Z',
        backgroundColor: '#FFF',
        duration: 600,
    }, '-=500');
  }
  render() {
    return(
      <div className={this.className}>
        <svg width="420" viewBox="0 0 457 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect id="rect" x="450" y="400" width="380" height="380" transform="rotate(-45 120 275)" fill="#D9C299"/>
          <circle id="circle" cx="420" cy="275" r="160" stroke="#1A1D1C" strokeWidth="10"/>
          <circle id="dashes" cx="420" cy="275" r="0" stroke="#D9C299" strokeWidth="12" strokeDasharray="30"/>
          <path id="triangle" d="M 464 392 L 539 255 L 539 255 L 502 324 Z" fill="#C03226"/>
        </svg>
      </div>
    )
  }
}

export default IntroShapes