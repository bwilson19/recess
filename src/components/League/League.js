import React, { useState, useEffect } from 'react';
import PostGame from '../Post/PostGame';
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
  Form,
  Image
} from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './League.css';

function League(props) {
  const [date, setDate] = useState(new Date());
  const [matchedGames, setMatchedGames] = useState('');
  const [currentGames, setCurrentGames] = useState('');
  const [league, setLeague] = useState('');
  const [editing, setEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState('upcoming');
  const changeDate = date => {
    setDate(date);
    filterGames(date);
  };
  const { match, games } = props;

  useEffect(() => {
    getLeague();
  }, []);

  const url = `https://recessapi.herokuapp.com/leagues/${match.params.id}?format=json`;

  function getLeague() {
    const url = `https://recessapi.herokuapp.com/leagues/${match.params.id}?format=json`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setLeague(response);
        matchGames(response);
      })
      .catch(console.error);
  }

  const matchGames = league => {
    let matched = games.filter(result => result.league === league.id);
    setMatchedGames(matched);
  };

  const filterGames = date => {
    let formatted = moment(date).format('YYYY-MM-DD');
    let filtered = matchedGames.filter(result =>
      result.date.includes(formatted)
    );
    setCurrentGames(filtered);
  };

  const handleSubmit = event => {
    event.preventDefault();

    let data = {};
    data.name = event.target['name'].value
      ? event.target['name'].value
      : league.name;
    data.manager = event.target['manager'].value
      ? event.target['manager'].value
      : league.manager;
    data.city = event.target['city'].value
      ? event.target['city'].value
      : league.city;
    data.sport = event.target['sport'].value
      ? event.target['sport'].value
      : league.sport;
    data.rules = event.target['rules'].value
      ? event.target['rules'].value
      : league.rules;

  
    for (var propName in data) {
      if (
        data[propName] === null ||
        data[propName] === '' ||
        data[propName] === undefined
      ) {
        delete data[propName];
      }
    }
    updateLeague(data);
    setEditing(false);
  };

  const updateLeague = data => {
    const url = `https://recessapi.herokuapp.com/leagues/${match.params.id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        response.json();
      })
      .then(data => {
        window.location.replace(
          `http://localhost:3000/league/${match.params.id}`
        );
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const deleteLeague = () => {
    const url = `https://recessapi.herokuapp.com/leagues/${match.params.id}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        window.location.replace('http://localhost:3000/');
      })
      .catch(console.error);
  };

  return (
    <div id="league">
      <Jumbotron fluid id="leagueHeader">
        <Container id="leagueSubHeader">
          {!editing && (
            <Row>
              <Col lg={7}>
                <h1>{league.name}</h1>
                <p>{league.city}</p>
              </Col>
              <Col lg={5}>
                <h5>Manager: {league.manager}</h5>
                <h5>Sport: {league.sport}</h5>
              </Col>
              <Button onClick={() => setEditing(true)}>Edit League</Button>
            </Row>
          )}
          {editing && (
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Col>
                  <Form.Group controlId="forName">
                    <Form.Label>Name</Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="Enter name of league"
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
              <Button type="submit">Submit</Button>
              <Button onClick={deleteLeague}>Delete League</Button>
              <Button onClick={() => setEditing(false)}>Cancel</Button>
            </Form>
          )}
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
          {/* <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => setCurrentPage('stats')}>
              Statistics
            </Nav.Link>
          </Nav.Item> */}
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
                  <PostGame id={match.params.id} />
                </Container>
              </Jumbotron>
              {matchedGames && !currentGames && (
                <ListGroup>
                  {matchedGames.map(game => (
                    <Link to={`game/${game.id}`} key={game.id}>
                      <ListGroup.Item>{game.name}</ListGroup.Item>
                    </Link>
                  ))}
                </ListGroup>
              )}
              {matchedGames && currentGames && (
                <ListGroup>
                  {currentGames.map(game => (
                    <Link to={`game/${game.id}`} key={game.id}>
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
      {/* {currentPage === 'stats' && (
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
      )} */}
      {currentPage === 'rules' && (
        <Container>
          <Image src="/images/rules.jpg" fluid />
          <Card>
            <Card.Header as="h5">Rules</Card.Header>
            <Card.Body>
              <Card.Text>{league.rules}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  );
}

export default League;
