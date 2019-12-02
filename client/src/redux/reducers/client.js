const defaultState = {
    clients: {},
    locations: {},
    jobs: {}
}

export default function(state=defaultState, action){
    console.error("IS the action hitting")
    switch(action.type){
        case 'GET_CLIENTS':
            return {
                ...state,
                ...action.payload.entities
            }
        case 'GET_CLIENTS_ERROR':
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}