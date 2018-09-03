export const setExtendedViewAct = (client) => ({
    type: 'SET_EXTENDED_VIEW',
    payload: client
});

export const uploadClientsAct = (clientsData) => ({
    type: 'UPLOAD_CLIENTS',
    payload: clientsData
});

export const uploadClients = () => dispatch => {
    fetch('clients.json')
        .then((response) => response.json())
        .then((clients) => {dispatch(uploadClientsAct(clients));})
};


