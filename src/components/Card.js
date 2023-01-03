import React from 'react';
import './Card.css';

export const Card = ({ img, characterName, gender, status }) => {
  return (
    <div class="card mb-4">
      <img class="card-img-top" src={img} alt={characterName}/>
      <div class="card-body">
        <h5 class="card-title">{characterName}</h5>
        <p class="card-text"> Gender: {gender} </p>
        <p class="card-text"> Status: {status} </p>
        <a href={`https://www.google.com/search?q=${characterName}`} class="btn btn-primary"> Research </a>
      </div>
    </div>
  );
}

export default Card;
