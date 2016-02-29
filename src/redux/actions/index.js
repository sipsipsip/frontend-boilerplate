import $ from 'jquery'
import config from '../../app.config'
import constants from '../constants'


function receivedCurrentUser(user){
    return {
        type: constants.RECEIVED_CURRENT_USER,
        payload: {user:user}
    }
}


function applicationIsFetching(){
    return {
        type: constants.APPLICATION_IS_FETCHING,
    }
}

function applicationFinishFetching(){
    return {
        type: constants.APPLICATION_FINISH_FETCHING,
    }
}


/*
 ** THUNK ACTION
 */

export function getCurrentUser(){
    return (dispatch) => {
        dispatch(applicationIsFetching())
        return $.ajax({
            method: 'GET',
            url: config.api.main.host + '/users/current',
            success: (user) => {
                setTimeout(function(){
                    dispatch(receivedCurrentUser(user));
                    dispatch(applicationFinishFetching());
                }, 5000)
            }
        });
    }
}