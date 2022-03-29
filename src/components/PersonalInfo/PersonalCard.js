import React from 'react';
import c from './PersonalCard.module.css'


const PersonalCard = (props) => {

    return (
        <div className={c.persCard}>
            <h3>Name: {props.name}</h3>
            <div>How many guests: {props.amount}</div>
            <div>Client phone number: {props.phone}</div>
        </div>
    );
};

export default PersonalCard;