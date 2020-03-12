import React, { useState} from 'react';
import './Map.css';
import { Container } from 'react-bootstrap';
import Iframe from 'react-iframe';

function Map(props) {
  const [location, setLocation] = useState([]);
  const { city, address } = props;


  const combineLocation = () => {
  if (city !== undefined) {
    let splitAddress = address.split(' ');
    let splitCity = city.split(' ');
    let combined = splitAddress.concat(splitCity);
    setLocation(combined);
  }
}


  return (
    <>
      <Container id="mapContainer" onLoad={combineLocation}>
        <Iframe
          url={`https://www.google.com/maps/embed/v1/place?q=${location[0]}%20${location[1]}%20${location[2]}%20${location[3]}&key=${process.env.REACT_APP_MAP_KEY}`}
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
