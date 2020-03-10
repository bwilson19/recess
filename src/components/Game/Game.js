import React, { useState, useEffect } from 'react';
import {
  Jumbotron,
  Container,
  Col,
  Row,
  Card,
  ListGroup,
  CardDeck,
  Button,
  Image,
  Form
} from 'react-bootstrap';
import { sample } from 'lodash';
import './Game.css';
import Map from '../Map/Map';

function Game(props) {
  const [pickedTeamOne, setTeamOne] = useState([]);
  const [pickedTeamTwo, setTeamTwo] = useState([]);
  const [game, setGame] = useState('');
  const { match } = props;

  useEffect(() => {
    getGame();
  }, []);

  function getGame() {
    const url = `https://recessapi.herokuapp.com/games/${match.params.id}?format=json`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setGame(response);
      })
      .catch(console.error);
  }

  let players = [
    { name: 'Brendan', id: '1' },
    { name: 'Jess', id: '2' },
    { name: 'Mikey', id: '3' },
    { name: 'James', id: '4' },
    { name: 'Nick', id: '5' },
    { name: 'Tory', id: '6' }
  ];

  const pickTeams = () => {
    let teamOne = [];
    let teamTwo = [];
    for (let i = 0; (i = players.length); i++) {
      let randomPlayer = sample(players);
      if (i % 2 === 0) {
        teamOne.push(randomPlayer);
        players.splice(players.indexOf(randomPlayer), 1);
        setTeamOne(teamOne);
      } else {
        teamTwo.push(randomPlayer);
        players.splice(players.indexOf(randomPlayer), 1);
        setTeamTwo(teamTwo);
      }
    }
  };

  return (
    <div id="gameContainer">
      <Jumbotron fluid>
        <Container>
          <h1>{game.name}</h1>
          <p>{game.date}</p>
          <p>{game.city}, {game.state}</p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col lg={8}>
            <Container>
              <Image
                src="https://billingssoftballassociation.com/files/2019/10/bigstock-Softball-In-A-Softball-Field-I-118759169_1.jpg"
                fluid
              />
              <Card>
                <Card.Header>Game Details</Card.Header>
                <Card.Body>
                  
                  <Card.Text>
                    {game.info}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
            <Container style={{ margin: '1rem 0' }} align="center">
              <Card>
                <Card.Header>Pick Teams</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    <Button onClick={pickTeams}>Pick Teams</Button>
                  </Card.Text>

                  <CardDeck>
                    <Card>
                      <Card.Header>Team One</Card.Header>
                      <ListGroup variant="flush">
                        {pickedTeamOne.map(player => (
                          <ListGroup.Item key={player.id}>
                            {player.name}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card>
                    <Card>
                      <Card.Header>Team Two</Card.Header>
                      <ListGroup variant="flush">
                        {pickedTeamTwo.map(player => (
                          <ListGroup.Item key={player.id}>
                            {player.name}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card>
                  </CardDeck>
                </Card.Body>
              </Card>
            </Container>
            <Container style={{ margin: '1rem 0' }}>
              <Card>
                <Card.Header>Comments</Card.Header>
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="email"
                      placeholder="enter email address"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                </Form>
              </Card>
            </Container>
          </Col>
          <Col lg={4}>
            <Container>
              <Card>
                <Card.Header>Location</Card.Header>
                <Map />
              </Card>
              <Card>
                <Card.Header>Roster</Card.Header>
                <ListGroup variant="flush">
                  {players.map(player => (
                    <ListGroup.Item key={player.id}>
                      {player.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Game;
