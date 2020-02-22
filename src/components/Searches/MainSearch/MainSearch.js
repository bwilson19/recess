import React from 'react';
import {
  Jumbotron,
  Container,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import './MainSearch.css';

function MainSearch() {
  return (
    <div>
      <Jumbotron fluid id="searchContainer">
        <Container id="heading">
          <h1>Welcome to Recess </h1>
          <h3>
            Find, manage, and add local pickup games, and connect with teammates!
          </h3>
        </Container>
        <Container id="searchBar">
          <InputGroup className="mb-3">
            <FormControl placeholder="Enter location" />
            <FormControl placeholder="Enter sport" />
            <InputGroup.Append>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default MainSearch;
