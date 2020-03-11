import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Jumbotron,
  Container,
  InputGroup,
  FormControl,
  Form,
  Button
} from 'react-bootstrap';
import './MainSearch.css';

function MainSearch(props) {
  const [redirect, setRedirect] = useState('');
  const { handleSubmit, handleChange, searchString, lastSearch } = props;

  function handleRedirect() {
    setRedirect(true);
  }
  return (
    <div>
      <Jumbotron fluid id="searchContainer">
        <Container id="heading">
          <h1>
            Welcome to <span id="recessSpan">Recess</span>
          </h1>
          <h3>Find pickup games and connect with teammates!</h3>
        </Container>
        <Container id="searchBar">
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search for a game or a league"
                name="searchString"
                onChange={handleChange}
                value={searchString}
              />
              <InputGroup.Append>
                <Button type="submit" onClick={handleRedirect}>
                  Search
                </Button>
                {redirect && lastSearch && (
                  <Redirect to={`/results/${lastSearch}`} />
                )}
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default MainSearch;
