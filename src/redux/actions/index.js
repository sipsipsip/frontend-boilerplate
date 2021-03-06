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

function receivedUserAndAtasan(data){
    return {
        type: constants.RECEIVED_USERS_AND_ATASAN,
        payload: {users: data}
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

export function setFetchingForMs(num = 4000){
    return (dispatch) => {
        dispatch(applicationIsFetching()
        );

        setTimeout(()=>{
            dispatch(applicationFinishFetching())
        }, num)
    }
}


export function getUsersAndAtasan(){
    return dispatch => {
        dispatch(applicationIsFetching());
        return $.ajax({
            method: 'GET',
            url: config.api.main.v2.host + '/pegawai?with=jabatan_pegawai.supervisor.pemegang',
            success: (users) => {
                setTimeout(()=>{
                    dispatch(receivedUserAndAtasan(users));
                    dispatch(applicationFinishFetching());
                }, 5000)
            },
            error: (reason) => {
                console.log('error');
                dispatch(applicationFinishFetching());
            }
        });
    }
}