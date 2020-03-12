import React from 'react';
import { Link } from 'react-router-dom';
import { CardColumns, Card } from 'react-bootstrap';
import './Results.css';

function Results(props) {
    const { newResults, lastSearch } = props;

    return (
        <div id="resultsBox">
            <div id="resultsHeader">
                <h6>
                    Found {newResults.length} results for '{lastSearch || 'all'}'
        </h6>
            </div>
            <div id="resultsGrid">
                <CardColumns>
                    {newResults.map(result => (
                        <Card key={result.id}>
                            {result.address && <Link to={`/league/game/${result.id}`}>
                                <Card.Body>
                                    <Card.Title>Game: {result.name}</Card.Title>
                            
                                    <Card.Text>{result.city}</Card.Text>
                                </Card.Body>
                            </Link>}
                            {result.rules && <Link to={`/league/${result.id}`}>
                                <Card.Body>
                                    <Card.Title>League: {result.name}</Card.Title>

                                    <Card.Text>{result.city}</Card.Text>
                                </Card.Body>
                            </Link>}
                        </Card>
                    ))}
                </CardColumns>
            </div>
        </div>
    );
}

export default Results;
