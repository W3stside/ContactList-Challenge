import * as types from '../actions/types'

// Contact IDs
/* eslint no-unused-vars: 0 */

const initialState = {
    contacts: [],
    contact: {
        id: '',
        firstName: '',
        lastName: '',
        dob: '',
        phone: '',
        email: ''
    }
}

const contactListReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CONTACTS_TEXT_INPUT:
            return {
                ...state,
                contact: {
                    ...state.contact,
                    [action.payload.field]: action.payload.input
                }
            }
        default:
            return state;
    }
}

export default contactListReducer
