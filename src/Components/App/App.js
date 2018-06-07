import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      user: '',
      city: '',
    };
    // Makes this in handle change the same as this in constructor
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({user: event.target.value});
  }

  handleChangeCity(event){
    this.setState({city: event.target.value});
  }
  render() {
    return (
      <div>
        <p>This user is: {this.state.user}</p>
        <p><input onChange={this.handleChange}/></p>
        <p>This city is: {this.state.city}</p>
        <p><input onChange={this.handleChangeCity}/></p>
      </div>
    );
  }
}

export default App;
