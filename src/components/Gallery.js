import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { Card } from './Card.js';

export const Gallery = () => {
  let [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setCharacters(data.results);
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div class="container">
      <div class="card-deck">
        {characters.map((element) => (
          <Card
            img={element.image}
            characterName={element.name}
            gender={element.gender}
            status={element.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
