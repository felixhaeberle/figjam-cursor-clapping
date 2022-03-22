import { Component } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti'

export default class Confetti extends Component {
  animationInstance = null;

  constructor(props) {
    super(props);
    this.fire = this.fire.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.clapping) {
      this.fire()
    }
  }

  makeShot(particleRatio, opts) {
    this.animationInstance && this.animationInstance({
      ...opts,
      origin: { y: 0.5 },
      spread: 45,
      startVelocity: 10,
      scalar: 0.5,
      particleCount: 1,
    });
  }

  fire() {
    this.makeShot();
  }

  handlerFire = () => {
    this.fire();
  };

  getInstance = (instance) => {
    this.animationInstance = instance;
  };

  render() {
    return (
      <>
        <ReactCanvasConfetti
          refConfetti={this.getInstance}
          style={{position: "fixed", top: (this.props.position.y - 200) + 'px', left: (this.props.position.x - 500) + 'px', }}
          className="canvas"
          width="1000"
          height="300"
        />
      </>
    )
  }
}