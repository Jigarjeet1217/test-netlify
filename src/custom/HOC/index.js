import React, { Component } from 'react';

const EnhancedComponent = (WrappedComponent) => {
  return class Counter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((p) => {
        return {
          count: p.count + 1,
        };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCounter}
        />
      );
    }
  };
};
export default EnhancedComponent;
