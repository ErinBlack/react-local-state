import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      user: {
        name: '',
        city: '',
        state: '',
        zipCode: '',
      },
    };
    // Makes this in handle change the same as this in constructor
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
  }
 
  handleChange(event){
    console.log(event.target.value);
    this.setState(
      {user: {
        ...this.state.user,
        name: event.target.value,
      }
    });
  }

  handleChangeCity(event){
    this.setState(
      {user: {
        ...this.state.user,
        city: event.target.value
      }
    });
  }
  render() {
    return (
      <div>
        <label for="name">What is your name?</label>
        <p><input id="name" onChange={this.handleChange}/></p>
        <label for="City">What city do you live in? </label>
        <p><input id="city" onChange={this.handleChangeCity}/></p>
        <p>{this.state.user.name} is from: {this.state.user.city}</p>
      </div>
    );
  }
}

export default App;
