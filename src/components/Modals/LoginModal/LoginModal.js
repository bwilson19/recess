import React from 'react';
import './LoginModal.css';
import {Modal, Tab, Row, Nav, Col, Form, Button} from 'react-bootstrap'

function LoginModal(props) {
  return (
    <div>
      <Modal
        {...props}
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
                      Sign Up
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col sm={100}>
                  <Nav.Item className="nav">
                    <Nav.Link eventKey="second" style={{ padding: '1rem' }}>
                      Login
                    </Nav.Link>
                  </Nav.Item>
                </Col>
              </Nav>
            </Row>
            <Row style={{ margin: '1rem 0 0 0' }}>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Form>
                      <>
                        <Form.Group>
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your full name"
                            name="name"
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your email"
                            name="email"
                          />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Form>
                      <>
                        <Form.Group>
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your full name"
                            name="name"
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your email"
                            name="email"
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
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModal;
