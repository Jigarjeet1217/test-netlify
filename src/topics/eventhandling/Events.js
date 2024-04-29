import React, { Component } from 'react';

export class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState((p) => {
      return {
        count: p.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        {/* {<button type='button' onClick={() => this.handleClick()}>
          {this.state.count} Times Clicked
        </button>} */}
        {
          <button type='button' onClick={this.handleClick}>
            {this.state.count} Times Clicked
          </button>
        }
      </div>
    );
  }
}

export default Events;
