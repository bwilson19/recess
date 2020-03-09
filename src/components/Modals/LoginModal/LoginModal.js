import React from 'react';
import './LoginModal.css';
import { Modal, Tab, Row, Nav, Col, Form, Button } from 'react-bootstrap';

class LoginModal extends React.Component {
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

  render(props) {
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton id="modalHeader">
            <Modal.Title id="contained-modal-title-vcenter">
              Sign Up or Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Container defaultActiveKey="first">
              <Row id="modalTabs">
                <Nav fill variant="tabs" className="flex-row">
                  <Col sm={100}>
                    <Nav.Item className="nav">
                      <Nav.Link eventKey="first" style={{ padding: '1rem' }}>
                        Login
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col sm={100}>
                    <Nav.Item className="nav">
                      <Nav.Link eventKey="second" style={{ padding: '1rem' }}>
                        Signup
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                </Nav>
              </Row>
              <Row style={{ margin: '1rem 0 0 0' }}>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Form
                        onSubmit={e => this.props.handleLogin(e, this.state)}
                      >
                        <>
                          <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              type="text"
                              name="username"
                              value={this.state.username}
                              onChange={this.handle_change}
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              value={this.state.password}
                              onChange={this.handle_change}
                            />
                          </Form.Group>

                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </>
                      </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Form
                        onSubmit={e => this.props.handleSignup(e, this.state)}
                      >
                        <>
                          <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              type="text"
                              name="username"
                              value={this.state.username}
                              onChange={this.handle_change}
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              value={this.state.password}
                              onChange={this.handle_change}
                            />
                          </Form.Group>

                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </>
                      </Form>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
