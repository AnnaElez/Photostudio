import React from 'react';

import classes from './FormCard.module.css';

const FormCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default FormCard;