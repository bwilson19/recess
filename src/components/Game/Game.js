import React, { useState } from 'react';
import {
  Jumbotron,
  Container,
  Col,
  Row,
  Card,
  ListGroup,
  CardDeck
} from 'react-bootstrap';
import { sample } from 'lodash';

function Game(props) {
  const [pickedTeamOne, setTeamOne] = useState([]);
  const [pickedTeamTwo, setTeamTwo] = useState([]);

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
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col sm={8}>
            <Jumbotron fluid>
              <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
              </Container>
            </Jumbotron>
            <CardDeck>
              <Card style={{ width: '18rem' }}>
                <Card.Header>Team One</Card.Header>
                <ListGroup variant="flush">
                  {pickedTeamOne.map(player => (
                    <ListGroup.Item key={player.id}>
                      {player.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
              <Card style={{ width: '18rem' }}>
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
          </Col>
          <Col sm={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Header>Roster</Card.Header>
              <ListGroup variant="flush">
                {players.map(player => (
                  <ListGroup.Item key={player.id}>{player.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <div>
        <p>Players:{players}</p>
      </div>
      <div>
        <p>Team One:{pickedTeamOne}</p>
      </div>
      <div>
        <p>Team Two:{pickedTeamTwo}</p>
      </div> */}
      <div>
        <button onClick={pickTeams}>Pick Teams</button>
      </div>
    </>
  );
}

export default Game;
