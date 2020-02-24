import React from 'react';
import { CardDeck, Card, Container, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Browse.css';

function Browse() {
  return (
    <>
      <Container id="browseDropDowns">
        <Form.Group className="browseForms">
          <Form.Label>
            <h5>City:</h5>
          </Form.Label>
          <Form.Control as="select" name="category">
            <option value="" disabled defaultValue>
              Choose One
            </option>
            <option value="sports">All</option>
            <option value="music">Music</option>
            <option value="festival">Festival</option>
            <option value="miscellaneous">Misc.</option>
            <option value="activism">Activism</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="browseForms">
          <Form.Label>
            <h5>Sport:</h5>
          </Form.Label>
          <Form.Control as="select" name="category">
            <option value="" disabled defaultValue>
              Choose One
            </option>
            <option value="sports">All</option>
            <option value="music">Music</option>
            <option value="festival">Festival</option>
            <option value="miscellaneous">Misc.</option>
            <option value="activism">Activism</option>
          </Form.Control>
        </Form.Group>
      </Container>
      <Container>
        <CardDeck>
          <Card>
            <Link to="/league">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Link>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
}

export default Browse;
