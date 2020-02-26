import React from 'react';
import './Map.css';
import { Container } from 'react-bootstrap';
import Iframe from 'react-iframe';

function Map() {
  return (
    <>
      <Container id="mapContainer">
        <Iframe
          url={`https://www.google.com/maps/embed/v1/place?q=westlake%20park%20daly%20city&key=${process.env.REACT_APP_MAP_KEY}`}
          frameborder="0px"
          width="100%"
          height="300px"
          id="myId"
          style={{ border: '0px' }}
        />
      </Container>
    </>
  );
}

export default Map;
