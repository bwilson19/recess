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
import { Link } from 'react-router-dom';
import './League.css';

function League(props) {
  const [date, setDate] = useState(new Date());
  const [dateFilter, setDateFilter] = useState([]);
  const changeDate = date => {
    setDate(date);
  };

  let games = [
    { name: 'Westlake', date: 'Feb 24th', id: '1' },
    { name: 'West Sunset', date: 'Feb 25th', id: '2' },
    { name: 'Portero Hill', date: 'Feb 26th', id: '3' }
  ];

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
            <ListGroup>
              {games.map(game => (
                <Link to="/game">
                  <ListGroup.Item key={game.id}>{game.name}</ListGroup.Item>
                </Link>
              ))}
            </ListGroup>
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
