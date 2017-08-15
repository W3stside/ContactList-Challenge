import React from 'react';
// REDUX
import { connect } from 'react-redux'
// RECOMPOSE
import { compose, withProps } from 'recompose'

// House form components here for adding contact
export const AddContactContainer = () =>
    <div>
    </div>

export default compose(
    connect(),
    withProps({})
)(AddContactContainer)
