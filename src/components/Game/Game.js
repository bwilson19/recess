import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { sample } from 'lodash';

function Game(props) {
  const [pickedTeamOne, setTeamOne] = useState([]);
  const [pickedTeamTwo, setTeamTwo] = useState([]);

  let players = ['Brendan', 'James', 'Matt', 'Mikey', 'Nick', 'Jess'];

  const pickTeams = () => {
    let teamOne = [];
    let teamTwo = [];
    for (let i = 0; (i = players.length); i++) {
      let randomPlayer = sample(players);
      if (i % 2 === 0) {
        teamOne.push(randomPlayer);
        players.splice(players.indexOf(randomPlayer), 1);
        console.log('this is team one: ' + teamOne);
        setTeamOne(teamOne);
      } else {
        teamTwo.push(randomPlayer);
        players.splice(players.indexOf(randomPlayer), 1);
        console.log('this is team two: ' + teamTwo);
        setTeamTwo(teamTwo);
      }
    }
  };

  return (
    <>
      <div>
        <p>Players:{players}</p>
      </div>
      <div>
        <p>Team One:{pickedTeamOne}</p>
      </div>
      <div>
        <p>Team Two:{pickedTeamTwo}</p>
      </div>
      <div>
        <button onClick={pickTeams}>Pick Teams</button>
      </div>
    </>
  );
}

export default Game;
