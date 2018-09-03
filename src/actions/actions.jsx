export const setExtendedViewAction = (client) => ({
    type: 'SET_EXTENDED_VIEW',
    payload: client
});

export const uploadClientsAction = (clientsData) => ({
    type: 'UPLOAD_CLIENTS',
    payload: clientsData
});

export const searchAction = (string) => ({
    type: 'SEARCH',
    payload: string
});

export const uploadClients = () => dispatch => {
    fetch('clients.json')
        .then((response) => response.json())
        .then((clients) => {dispatch(uploadClientsAction(clients));})
};


