import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      user: null,
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }
   componentDidMount() {
      if (this.props.location.pathname.indexOf('/') !== -1) {
          this.props.history.replace('/login');
      }
   } 

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const userSet = JSON.parse(localStorage.getItem('userSet'));

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }
  
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    for (let i = 0; i < userSet.length; i++) {
       if (this.state.username === userSet[i].userName
        && this.state.password === userSet[i].password) {
            this.setState({user: i + 1});
           break; 
       }
    }

    if (this.state.user) {
    this.props.history.push({pathname: 'home', query: {user: this.state.user}});
    }   
}

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;