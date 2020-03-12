import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/SignupForm';
import { Nav } from 'react-bootstrap';
import './LoginNav.css';

function LoginNav(props) {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);

  return (
    <div>
      {props.logged_in && (
        <Nav>
          <Nav.Item>
            <Nav.Link>
              Welcome, {props.username}
              <span onClick={props.handle_logout}> (Logout)</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )}
      {!props.logged_in && (
        <Nav>
          <Nav.Item>
            <Nav.Link onClick={() => setLoginModalShow(true)}>Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setSignupModalShow(true)}>Signup</Nav.Link>
          </Nav.Item>
          <LoginForm
            handle_login={props.handle_login}
            username={props.username}
            show={loginModalShow}
            onHide={() => setLoginModalShow(false)}
          />
          <SignupForm
            handle_signup={props.handle_signup}
            show={signupModalShow}
            onHide={() => setSignupModalShow(false)}
          />
        </Nav>
      )}
    </div>
  );
}

export default LoginNav;

LoginNav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  handle_logout: PropTypes.func.isRequired
};
