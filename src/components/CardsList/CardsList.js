import React from 'react';
import c from './CardsList.module.css';
import TimeFetch from './TimeFetch';

const CardsList = (props) => {
    return (
        <div className={c.CardsList}>
            <TimeFetch url={'tm'} onClick={props.onClick} />
            <TimeFetch url={'td'} onClick={props.onClick} />
            <TimeFetch url={'te'} onClick={props.onClick} />
        </div>
    );
}

export default CardsList;
