const defaultState = {
    clients: [],
    text: '',
    sortBy: '',
    sortDir: '',
    searchTerm: ''
}

export default function(state=defaultState, action){
    switch(action.type){
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.columnKey,
                sortDir: action.sortDir
            }
        case 'FILTER_BY':
            return {
                ...state,
                searchTerm: action.searchTerm,
        }
        default:
            return state
    }
}