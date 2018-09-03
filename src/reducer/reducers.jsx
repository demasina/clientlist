import { combineReducers } from 'redux';

const clientsData = [
];

const clientsReducer = (state = clientsData, action) => {
    if (action.type === 'UPLOAD_CLIENTS') {
        return action.payload;
    }
    return state;
};

const extendedViewReducer = (state = null, action) => {
    if (action.type === 'SET_EXTENDED_VIEW') {
        return action.payload || null;
    }
    return state;
};



const rootReducer = combineReducers({
    clientsState: clientsReducer,
    extendedViewState: extendedViewReducer,
});

export default rootReducer;