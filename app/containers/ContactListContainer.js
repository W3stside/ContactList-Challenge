import React, { Component } from 'react';
// REDUX
import { connect } from 'react-redux'
// ACTIONCREATORS
import { deleteContact, editContact } from '../actions/contactActions'
import { handleTextInput } from '../actions'
// CONSTANTS
import * as types from '../actions/types'
// COMPONENTS
import ContactList from '../components/ContactList'

export class ContactListContainer extends Component {
    render() {
        const {contacts, dispatch} = this.props;
        // Curry an ACTIONCREATOR handleTextInput function for saving ID
        const handleID = handleTextInput(types.CONTACTS_TEXT_INPUT)('id');

        return (
            <div>
                <ContactList
                    data={contacts}
                    handleContactDelete = { (id) => {dispatch(deleteContact(id))} }
                    handleContactEdit   = { (id) => {dispatch(editContact(id))} }
                    handleSavingID      = { (input) => {dispatch(handleID(input))}}/>
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
