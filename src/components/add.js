import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Add extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      iteration: 0,
      egg: 0
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, iteration, egg } = this.state;

    axios.post('/api/user/habits', { name, iteration, egg })
      .then((result) => {
        // localStorage.setItem('jwtToken', result.data.token);
        console.log(result);
        console.log('DO I GET HERE>!?!?!?!?!?');
        this.props.history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Add failed.' });
        }
      });
  }

  render() {
    const { name, iteration, egg } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          
          <h2 class="form-signin-heading">Please Add Habit</h2>
          <label for="inputTitle" class="sr-only">Name</label>
          <input type="text" class="form-control" placeholder="Name" name="name" value={name} onChange={this.onChange} required/>
          <label for="inputAuthor" class="sr-only">Iteration</label>
          <input type="text" class="form-control" placeholder="Iteration" name="iteration" value={iteration} onChange={this.onChange} required/>
          <label for="inputAuthor" class="sr-only">Eggs</label>
          <input type="text" class="form-control" placeholder="Egg" name="egg" value={egg} onChange={this.onChange} required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Add;
