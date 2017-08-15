import React, { Component } from 'react';
// REDUX
import { connect } from 'react-redux'
// ACTIONCREATORS
import { deleteContact, editContact } from '../actions/contactActions'
import { handleTextInput } from '../actions'
// CONSTANTS
import * as types from '../actions/types'

export class ContactListContainer extends Component {
    render() {
        const {contacts, dispatch} = this.props;
        // Curry an ACTIONCREATOR handleTextInput function for saving ID
        const handleID = handleTextInput(types.CONTACTS_TEXT_INPUT)('id');

        return (
            <div>
                {/* Contact list here */}
            </div>
        )
    }
}

ContactListContainer.propTypes = {
    contacts: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object,
    ]),
    dispatch: React.PropTypes.func,
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.contacts
    }
}

export default connect(mapStateToProps)(ContactListContainer)
