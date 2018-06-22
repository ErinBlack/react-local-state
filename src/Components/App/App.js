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
  }

  // Currying
  handleChangeFor = propertyName => event => {
      this.setState({
        user: {
          ...this.state.user,
         [propertyName]: event.target.value,
        }
      })
  }

  // Logging 
  handleSubmit = (e) => {
    console.log('in handleclick')
    console.log('name', this.state.user.name);
    console.log('city', this.state.user.city);
    e.preventDefault();
    // e.target.reset();
    this.setState({
        user: {
          name:'',
          city: '',
        }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name">What is your name?</label>
        <p><input value={this.state.user.name} id="name" onChange={this.handleChangeFor('name')}/></p>
        <label for="City">What city do you live in? </label>
        <p><input value={this.state.user.city} id="city" onChange={this.handleChangeFor('city')}/></p>
  
        <input type="submit" value="Submit the Form"/>
        <p>{this.state.user.name} is from: {this.state.user.city}</p>
      </form>
    );
  }
}

export default App;
