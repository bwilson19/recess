import React from 'react';
import { CardDeck, Card, Container, Form, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Browse.css';

function Browse(props) {
  const { leagues, games } = props;
  return (
    <>
      {/* <Container id="browseDropDowns">
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
      </Container> */}

      <Container className="browseDecks">
        <Container align="center">
          <h4>Featured Leagues</h4>
        </Container>
      </Container>
      <Carousel>
        <Carousel.Item>
          <Container>
            <CardDeck>
              {leagues.slice(0, 3).map(league => (
                <Card key={league.id}>
                  <Link to={`league/${league.id}`}>
                   
                    <Card.Body>
                      <Card.Title>{league.name}</Card.Title>
                      <Card.Text>{league.city}</Card.Text>
                    </Card.Body>
                    <Card.Footer>{league.sport}</Card.Footer>
                  </Link>
                </Card>
              ))}
            </CardDeck>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <CardDeck>
              {leagues.slice(3, 6).map(league => (
                <Card key={league.id}>
                  <Link to={`league/${league.id}`}>
                    
                    <Card.Body>
                      <Card.Title>{league.name}</Card.Title>
                      <Card.Text>{league.city}</Card.Text>
                    </Card.Body>
                    <Card.Footer>{league.sport}</Card.Footer>
                  </Link>
                </Card>
              ))}
            </CardDeck>
          </Container>
        </Carousel.Item>
      </Carousel>
      <Container className="browseDecks">
        <Container align="center">
          <h4>Featured Games</h4>
        </Container>
      </Container>
      <Carousel>
        <Carousel.Item>
          <Container>
            <CardDeck>
              {games.slice(0, 3).map(game => (
                <Card key={game.id}>
                  <Link to={`league/game/${game.id}`}>
                    <Card.Img
                      variant="top"
                      src={game.image}
                      height="200px"
                    />
                    <Card.Body>
                      <Card.Title>{game.name}</Card.Title>
                      <Card.Text>{game.city}</Card.Text>
                    </Card.Body>
                    <Card.Footer>{game.date}</Card.Footer>
                  </Link>
                </Card>
              ))}
            </CardDeck>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <CardDeck>
              {games.slice(3, 6).map(game => (
                <Card key={game.id}>
                  <Link to={`league/game/${game.id}`}>
                    <Card.Img
                      variant="top"
                      src={game.image}
                      height="200px"
                    />
                    <Card.Body>
                      <Card.Title>{game.name}</Card.Title>
                      <Card.Text>{game.city}</Card.Text>
                    </Card.Body>
                    <Card.Footer>{game.date}</Card.Footer>
                  </Link>
                </Card>
              ))}
            </CardDeck>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Browse;
