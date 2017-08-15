// CONSTANTS
import * as types from './types'
import {push} from 'react-router-redux'

let contactID = 0;

export const addContact = info => dispatch => {
    dispatch({
        type: types.CONTACTS_ADD,
        payload: {
            contact: {
                ...info,
                id: contactID++
            }
        }
    })
    dispatch({
        type: types.CONTACTS_CLEAR
    })
    return dispatch(push('/ContactList'))
}

export const editContact = data => dispatch => {
    dispatch({
        type: types.CONTACTS_EDIT,
        payload: {
            ...data
        }
    })
    return dispatch(push('/ContactList'))
}

export const deleteContact = id => {
    return {
        type: types.CONTACTS_DELETE,
        payload: id
    }
}
