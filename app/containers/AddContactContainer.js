import React from 'react';
// REDUX
import { connect } from 'react-redux'
// RECOMPOSE
import { compose, withProps } from 'recompose'
// COMPONENTS
import FormWrapper from '../components/FormWrapper'
import InputField from '../components/InputField'
import SubmitButton from '../components/SubmitButton'

const contact = [
    {a: 1},
    {a: 2},
    {a: 3}
]

// House form components here for adding contact
export const AddContactContainer = () =>
    <div>
        <FormWrapper
            buttonName="Add Contact"
            data={contact}>
            {/* First Name */}
            <InputField
                id="ip1"
                inputName="firstname"
                labelName="First Name"
                placeholder="First Name"
                style="flex colNoWrap aCenter jCenter width100 margin15TB"/>
            {/* Last Name */}
            <InputField
                id="ip2"
                inputName="lastname"
                labelName="Last Name"
                placeholder="Last Name"
                style="flex colNoWrap aCenter jCenter width100 margin15TB"/>
            {/* DOB */}
            <InputField
                id="ip3"
                inputName="dob"
                labelName="Date of Birth"
                placeholder="yyyy/dd/mm"
                style="flex colNoWrap aCenter jCenter width100 margin15TB"/>
            {/* Phone */}
            <InputField
                id="ip4"
                inputName="phone"
                labelName="Phone Number"
                placeholder="Phone"
                style="flex colNoWrap aCenter jCenter width100 margin15TB"/>
            {/* E-Mail */}
            <InputField
                id="ip5"
                inputName="email"
                labelName="E-Mail"
                placeholder="E-Mail"
                style="flex colNoWrap aCenter jCenter width100 margin15TB"/>
            <SubmitButton
                name="Add Contact"
                />
        </FormWrapper>
    </div>

export default compose(
    connect(),
    withProps({})
)(AddContactContainer)
