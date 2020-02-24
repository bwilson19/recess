import React, { useState } from 'react';
// https://www.npmjs.com/package/react-calendar
import Calendar from 'react-calendar';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Nav,
  ListGroup
} from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './League.css';

function League(props) {
  const [date, setDate] = useState(new Date());
  const [currentGames, setCurrentGames] = useState('');
  const changeDate = date => {
    setDate(date);
    filterGames(date);
  };

  let games = [
    {name: 'Westlake', date: 'Tue, Feb 25th 2020', id: 1},
    { name: 'West Sunset', date: 'Wed, Feb 26th 2020', id: 2 },
    { name: 'Portero Hill', date: 'Thu, Feb 27th 2020', id: 3 }
  ];

  const filterGames = date => {
    let formatted = moment(date).format('ddd, MMM Do YYYY');
    console.log(formatted);
    let filtered = games.filter(result => result.date.includes(formatted));
    setCurrentGames(filtered);
  };

  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>League</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <Container id="leagueTabs">
        <Nav justify variant="pills" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0">Upcoming Games</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Statistics</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Rules</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <Container>
        <Row>
          <Col lg={8}>
            <Jumbotron fluid>
              <Container>
                <h1>Upcoming Games</h1>
              </Container>
            </Jumbotron>
            {!currentGames && (
              <ListGroup>
                {games.map(game => (
                  <Link to="/game">
                    <ListGroup.Item key={game.id}>{game.name}</ListGroup.Item>
                  </Link>
                ))}
              </ListGroup>
            )}
            {currentGames && (
              <ListGroup>
                {currentGames.map(game => (
                  <Link to="/game">
                    <ListGroup.Item key={game.id}>{game.name}</ListGroup.Item>
                  </Link>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col lg={4}>
            <Calendar onChange={changeDate} value={date} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default League;
