import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/SignupForm';
import { ButtonToolbar, Button } from 'react-bootstrap';

function LoginNav(props) {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);

  return (
    <div>
      {' '}
      <ButtonToolbar>
        <Button variant="primary" onClick={() => setLoginModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <Button variant="primary" onClick={() => setSignupModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <LoginForm
          handle_login={props.handle_login}
          show={loginModalShow}
          onHide={() => setLoginModalShow(false)}
        />
        <SignupForm
          handle_signup={props.handle_signup}
          show={signupModalShow}
          onHide={() => setSignupModalShow(false)}
        />
      </ButtonToolbar>
    </div>
  );
}

export default LoginNav;

LoginNav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  handle_logout: PropTypes.func.isRequired
};
