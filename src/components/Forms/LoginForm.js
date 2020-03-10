import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Button } from 'react-bootstrap';

// taken from https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={e => this.props.handle_login(e, this.state)}>
                    <h4>Log In</h4>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handle_change}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handle_change}
                    />
                    <input type="submit" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

        
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
