import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      user: '',
    };
    // Makes this in handle change the same as this in constructor
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({user: event.target.value});

  }
  render() {
    return (
      <div>
        <p>This user is: {this.state.user}</p>
        <p><input onChange={this.handleChange}/></p>
      </div>
    );
  }
}

export default App;
