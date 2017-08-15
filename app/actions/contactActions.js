// CONSTANTS
import * as types from './types'

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
    return dispatch({
        type: types.CONTACTS_CLEAR
    })
}
