import React from 'react';
import ClientItem from './clientItem';
import { List } from 'semantic-ui-react'

const clientList = ({clients}) => {
    console.log(clients)
    const clientsList = clients.map((client) => {
        return (<ClientItem client={client} key={client.general.firstName + client.general.lastName}/>);
    });

    return (
        <div>
            <List>
                {clientsList}
            </List>
        </div>
    );
};

export default clientList;