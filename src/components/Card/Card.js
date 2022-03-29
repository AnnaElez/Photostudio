import React from 'react';
import c from './Card.module.css';


const Card = (props) => {
 
  return (
    <>
      <div className={c.Card} tabIndex={1} onClick={props.onClick}>
        <p> {props.time} </p>
      </div>
    </>
  );
}

export default Card;
