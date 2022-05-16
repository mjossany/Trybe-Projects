import React, { Component } from 'react';
import { number } from 'prop-types';

class Timer extends Component {
  render() {
    const { timer } = this.props;
    return (
      <p>
        { timer }
      </p>
    );
  }
}

Timer.propTypes = {
  timer: number.isRequired,
};

export default Timer;
