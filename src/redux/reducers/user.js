import constants from '../constants/index'
import assign from 'object-assign'
import _ from 'lodash'

let initialState = {}

export default function(state = initialState, action){
    let payload = action.payload;
    let type = action.type
    let nstate = {}
    switch(type){
        case constants.RECEIVED_CURRENT_USER:
            let roles = _.pluck(payload.user.roles, 'id')
                roles = roles.map((id) => { return parseInt(id)});
            let currentUser = payload.user;
                currentUser = assign({}, currentUser, {role_ids: roles});
                nstate = assign({}, state, currentUser);

            return nstate;
        break;

        default:
        // do nothing
    }

    return state
}