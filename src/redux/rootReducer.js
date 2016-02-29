import { combineReducers } from 'redux'
import {routeReducer as routing} from 'react-router-redux'
import user from './reducers/user'
import global from './reducers/global'

let rootReducer = combineReducers({global, user, routing: routing})

export default rootReducer