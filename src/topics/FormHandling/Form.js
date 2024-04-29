import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
    };
  }
  reset = () => {
    this.setState({ name: '', age: '' });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.reset();
  };
  onInputChange = (e) => {
    this.setState(() => {
      return {
        [e.target.name]: e.target.value,
      };
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <input
            type='number'
            id='age'
            name='age'
            min={0}
            max={150}
            required
            value={this.state.age}
            onChange={this.onInputChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Form;
