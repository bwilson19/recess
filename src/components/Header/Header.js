import React, { Component } from 'react';
import LoginNav from '../Nav/LoginNav';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/SignupForm';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('https://recessapi.herokuapp.com/current_user/?format=json', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('https://recessapi.herokuapp.com/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('https://recessapi.herokuapp.com/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          sticky="top"
          expand="lg"
          variant="dark"
          id="navBar"
        >
          <Navbar.Brand href="/">
            <img src="/images/icon.png" alt="Recess" id="logo" width="40px" />
          </Navbar.Brand>
          <Navbar.Brand href="/" id="recessName">
            Recess
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav align="center" id="navbarLogin">
              <h3>{this.state.logged_in && `Hello, ${this.state.username}`}</h3>
              <LoginNav
                handle_login={this.handle_login}
                handle_signup={this.handle_signup}
                logged_in={this.state.logged_in}
                display_form={this.display_form}
                handle_logout={this.handle_logout}
              />

              {/* <a href="url 'social:begin' 'facebook'">
                Login with Facebook
              </a> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
