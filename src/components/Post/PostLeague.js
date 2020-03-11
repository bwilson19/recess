import React from 'react';
import './PostGame.css';
import { Form, Col, Button, ButtonToolbar, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {

   const handleSubmit = event => {
     event.preventDefault();
     let data = {};
     data.name = event.target['name'].value;
     data.manager = event.target['manager'].value;
     data.city = event.target['city'].value;
     data.sport = event.target['sport'].value;
     data.rules = event.target['rules'].value;
     postNewLeague(data);
   };

   const postNewLeague = data => {
     const url = 'https://recessapi.herokuapp.com/leagues/';
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
      </Modal.Header>
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
                <Form.Label>Manager</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter name of manager"
                  name="manager"
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
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Sport</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter sport"
                  name="sport"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group>
            <Form.Label>Rules</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter rules"
              name="rules"
            />
          </Form.Group>
          <Button variant="outline-success" type="submit">
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

function PostLeague(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create new league
      </Button>

      <MyVerticallyCenteredModal
        
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default PostLeague;
