import React from 'react';
import './style.css';

function Title(props) {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='display-4' id='bikiniBottom'>
          {props.bb}
        </h1>
        <h1 className='display-4'>{props.clicky}</h1>
      </div>
    </div>
  );
}

export default Title;
