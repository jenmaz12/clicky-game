import React from 'react';
import './style.css';

function NavBar(props) {
  return (
    <ul className='nav'>
      <li className='nav-item'>Score: {props.score}</li>
      <li className='nav-item'>{props.message}</li>
      <li className='nav-item' id='topScore'>
        Top Score: {props.topScore}
      </li>
    </ul>
  );
}

export default NavBar;
