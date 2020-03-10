import React, { useState, useEffect } from 'react';
// https://www.npmjs.com/package/react-calendar
import Calendar from 'react-calendar';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Nav,
  ListGroup,
  Button,
  Card,
  Table,
  Image
} from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './League.css';

function League(props) {
  const [date, setDate] = useState(new Date());
  const [currentGames, setCurrentGames] = useState('');
  const [currentPage, setCurrentPage] = useState('upcoming');
  const changeDate = date => {
    setDate(date);
    filterGames(date);
  };
  const { match, games } = props;

  useEffect(() => {
    matchGames();
  }, []);

  const matchGames = () => {
    let matched = games.filter(
      result =>
        result.league ===
        `https://recessapi.herokuapp.com/leagues/${match.params.id}?format=json`
    );
    setCurrentGames(matched);
  };

  const filterGames = date => {
    let formatted = moment(date).format('YYYY-MM-DD');
    let filtered = games.filter(result => result.date.includes(formatted));
    setCurrentGames(filtered);
  };

  return (
    <>
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col lg={7}>
              <h1>League</h1>
              <p>San Francisco, CA</p>
            </Col>
            <Col lg={5}>
              <h5>Commissioner: Steven</h5>

              <h6>Members: 200 (See all)</h6>
              <h6>Created: 2001</h6>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container id="leagueTabs">
        <Nav justify variant="pills" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              eventKey="link-0"
              onClick={() => setCurrentPage('upcoming')}
            >
              Upcoming Games
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => setCurrentPage('stats')}>
              Statistics
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => setCurrentPage('rules')}>
              Rules
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      {currentPage === 'upcoming' && (
        <Container>
          <Row>
            <Col lg={7}>
              <Jumbotron fluid>
                <Container align="center">
                  <h1>Upcoming Games</h1>
                  <Button onClick={() => setCurrentGames('')}>
                    Show All Games
                  </Button>
                </Container>
              </Jumbotron>
              {games && !currentGames && (
                <ListGroup>
                  {games.map(game => (
                    <Link to="/game" key={game.id}>
                      <ListGroup.Item>{game.name}</ListGroup.Item>
                    </Link>
                  ))}
                </ListGroup>
              )}
              {games && currentGames && (
                <ListGroup>
                  {currentGames.map(game => (
                    <Link to="/game" key={game.id}>
                      <ListGroup.Item>{game.name}</ListGroup.Item>
                    </Link>
                  ))}
                </ListGroup>
              )}
            </Col>
            <Col lg={5}>
              <Container align="center">
                <Card>
                  <Card.Header as="h5">When do you want to play?</Card.Header>
                  <Card.Body>
                    <Calendar onChange={changeDate} value={date} />
                  </Card.Body>
                </Card>
              </Container>
            </Col>
          </Row>
        </Container>
      )}
      {currentPage === 'stats' && (
        <Container>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      )}
      {currentPage === 'rules' && (
        <Container>
          <Image src="/images/rules.jpg" fluid />
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
}

export default League;
