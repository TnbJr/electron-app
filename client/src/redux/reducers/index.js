import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import entities from './client'
import pages from './pages'


export default combineReducers({
    auth,
    entities,
    pages,
    form: formReducer
})