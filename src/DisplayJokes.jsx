import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './DisplayJokes.css';
import { useState } from 'react';

function DisplayJoke({ jokes }) {
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: 2,
      padding: 2
    }}>
      {Array.isArray(jokes) && jokes.map((joke) => (
        <Box
          key={joke.id}
          className="flip-card"
          onClick={() => handleFlip(joke.id)}
        >
          <Box className={`flip-card-inner ${flippedCards[joke.id] ? 'flipped' : ''}`}>
            {/* Front */}
            <Card className="flip-card-front">
              <CardContent>
                <Typography variant="h5">{joke.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Get Ready for jokes
                </Typography>
              </CardContent>
            </Card>

            {/* Back */}
            <Card className="flip-card-back">
              <CardContent>
                <Typography variant="h6">Joke</Typography>
                <Typography variant="body2">
                  {joke.joke}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default DisplayJoke;
