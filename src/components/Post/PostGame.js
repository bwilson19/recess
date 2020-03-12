import React from 'react';
import { Form, Col, Button, ButtonToolbar, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {};
    data.name = event.target['name'].value;
    data.address = event.target['address'].value;
    data.city = event.target['city'].value;
    data.state = event.target['state'].value;
    data.zipcode = event.target['zipcode'].value;
    data.date = event.target['date'].value;
    data.info = event.target['info'].value;
    data.image = event.target['image_url'].value;
    data.league = props.id;
    postNewGame(data);
  };

  const postNewGame = data => {
    console.log(data)
    const url = 'https://recessapi.herokuapp.com/games/';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        response.json();
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header >
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Group controlId="forName">
                <Form.Label>Name</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter name of event"
                  name="name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Address</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  name="address"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  name="city"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter state"
                  name="state"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter zipcode"
                  name="zipcode"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter date of game"
                  name="date"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group>
            <Form.Label>Info</Form.Label>
            <Form.Control type="text" placeholder="Enter info" name="info" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              name="image_url"
            />
          </Form.Group>
       
          <Button variant="outline-success" type="submit" onClick={props.onHide}>
            Submit
          </Button>
        </Form>
      </>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function PostGame(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Game
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={props.id}
      />
    </ButtonToolbar>
  );
}

export default PostGame;
