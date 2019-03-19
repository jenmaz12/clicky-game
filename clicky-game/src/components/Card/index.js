import React from 'react';
import './style.css';

function Card({ clickHandler, id, image, name }) {
  return (
    <div className='card'>
      <img
        src={image}
        alt={name}
        className='card-img'
        onClick={() => clickHandler(id)}
      />
    </div>
  );
}

export default Card;
