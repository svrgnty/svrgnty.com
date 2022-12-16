import React, {Component} from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Hero;