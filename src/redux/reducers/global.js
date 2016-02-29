import constants from '../constants'
import assign from 'object-assign'

let initialState = {
   isFetching: true,
   theme: 'banana'
}


export default function global(state = initialState, action){

    let { type, payload } = action
    let nstate;
    switch(type){
        case constants.APPLICATION_IS_FETCHING:
        nstate = assign({}, state, {isFetching: true});
        return nstate;
        break;

        case constants.APPLICATION_FINISH_FETCHING:
        nstate = assign({}, state, {isFetching: false});
        return nstate;
        break;
        default:
    }
    return state;
}