import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import c from './CardsList.module.css';

const TimeFetch = (props) => {

    const [timeSchedule, setTimeSchedule] = useState([]);

    useEffect(() => {

        const TimeScheduleFetch = async () => {

            const response = await fetch(`https://foodorder-17472-default-rtdb.firebaseio.com/PHOTOSTUDIO_TIME/${props.url}.json`)

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }


            const responseData = await response.json();

            const hours = [];

            for (const key in responseData) {
                hours.push({
                    id: key,
                    time: responseData[key].time
                })
            }
            setTimeSchedule(hours);
        }
        TimeScheduleFetch()
    }, [])

    return (
        <div className={`${c.time_wrapper} ${c.border}`}> 
            {timeSchedule.map(schedule =>
                <Card
                    key={schedule.id}
                    id={schedule.id}
                    time={schedule.time}
                    onClick={props.onClick} />
            )}
        </div>
    );
}

export default TimeFetch;
