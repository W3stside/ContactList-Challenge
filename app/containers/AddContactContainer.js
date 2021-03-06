import React from 'react';
// REDUX
import { connect } from 'react-redux'
// RECOMPOSE
import { compose, withProps } from 'recompose'
// COMPONENTS
import FormWrapper from '../components/FormWrapper'
import InputField from '../components/InputField'
import SubmitButton from '../components/SubmitButton'
import Title from '../components/Title'
// ACTIONCREATORS
import { handleTextInput } from '../actions'
import { addContact } from '../actions/contactActions'
import * as types from '../actions/types'
// Curried Action Creators from handleTextInput
const contactHandler = handleTextInput(types.CONTACTS_TEXT_INPUT);
// Text Input handler actions
const handleContactFirstName = contactHandler('firstName');
const handleContactLastName = contactHandler('lastName');
const handleContactDOB = contactHandler('dob');
const handleContactPhone = contactHandler('phone');
const handleContactEmail = contactHandler('email');

// House form components here for adding contact
export const AddContactContainer = ({contacts: {contact}, dispatch, validateEmail}) =>
    <div>
        <Title text="Add Contact"/>
        <FormWrapper
            buttonName="Add Contact"
            data={contact}
            submitAction={ (data) => dispatch(addContact(data))}>
            {/* First Name */}
            <InputField
                id="ip1"
                handleChange={ (input) => dispatch(handleContactFirstName(input)) }
                inputName="firstname"
                labelName="First Name"
                placeholder="First Name"
                style="flex colNoWrap aCenter jCenter width100 margin15TB"/>
            {/* Last Name */}
            <InputField
                id="ip2"
                handleChange={ (input) => dispatch(handleContactLastName(input)) }
                inputName="lastname"
                labelName="Last Name"
                placeholder="Last Name"
                style="flex colNoWrap aCenter jCenter width100 margin15TB"/>
            {/* DOB */}
            <InputField
                id="ip3"
                handleChange={ (input) => dispatch(handleContactDOB(input)) }
                inputName="dob"
                labelName="Date of Birth"
                placeholder="yyyy/dd/mm"
                style="flex colNoWrap aCenter jCenter width100 margin15TB"/>
            {/* Phone */}
            <InputField
                id="ip4"
                handleChange={ (input) => dispatch(handleContactPhone(input)) }
                inputName="phone"
                labelName="Phone Number"
                placeholder="Phone"
                style="flex colNoWrap aCenter jCenter width100 margin15TB"/>
            {/* E-Mail */}
            <InputField
                id="ip5"
                handleChange={ (input) => dispatch(handleContactEmail(input)) }
                inputName="email"
                labelName="E-Mail"
                placeholder="E-Mail"
                style="flex colNoWrap aCenter jCenter width100 margin15TB"/>
            <SubmitButton
                name="Add Contact"
                status={contact && validateEmail(contact.email) ? false : true}/>
        </FormWrapper>
    </div>

AddContactContainer.propTypes = {
    contacts: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    validateEmail: React.PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export default compose(
    connect(mapStateToProps),
    withProps({
        // Email validator
        validateEmail: (email) => {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            // test() searches for specified regexp ... returns boolean
            return re.test(email);
        }
    })
)(AddContactContainer)
