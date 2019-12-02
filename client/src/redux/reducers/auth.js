const defaultState = {
    authenticated: false,
    errorMessage: ''
}

export default function(state=defaultState, action){
    switch(action.type){
        case 'AUTH_USER':
            return {
                ...state,
                authenticated: action.payload
            }
        case 'AUTH_ERROR':
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}