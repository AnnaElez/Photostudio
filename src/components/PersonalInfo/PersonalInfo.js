import React, { useState, useEffect } from 'react';
import c from './PersonalInfo.module.css';
import PersonalCard from './PersonalCard';
import BeatLoader from 'react-spinners/BeatLoader';

const PersonalInfo = (props) => {

    const newClient = props.isRenting;

    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const ClientsFetch = async () => {

            setIsLoading(true);
            const response = await fetch('https://foodorder-17472-default-rtdb.firebaseio.com/PHOTOSTUDIO_ORDERS.json')

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }


            const responseData = await response.json();

            const newClients = [];

            for (const key in responseData) {
                newClients.push({
                    id: key,
                    name: responseData[key].clientData.name,
                    amount: responseData[key].clientData.amount,
                    phone: responseData[key].clientData.phone
                })
            }

            setClients(newClients);
            setIsLoading(false);

        }

        ClientsFetch().catch((error) => {
            setIsLoading(false);
            // setHttpError(error.message);
        });

        ClientsFetch()
    }, [newClient])


    const ClientsList = clients.map(client =>
        <PersonalCard
            key={client.id}
            id={client.id}
            name={client.name}
            amount={client.amount}
            phone={client.phone} />
    )


    return <div className={c.personalCard}>
        {/* {isLoading && <BeatLoader/>} */}
        {ClientsList}
    </div>

}

export default PersonalInfo;
