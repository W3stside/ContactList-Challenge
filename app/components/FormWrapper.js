import React from 'react'
// STYLES
import { button } from '../styles/button.scss'

/* eslint no-unused-vars: 0 padded-blocks: 0 */
/* eslint no-console: 0 */
const FormWrapper = ({buttonName, children, data, submitAction}) =>
    <form
        className="flex colNoWrap aCenter jCenter width100"
        onSubmit={ (e) => {
            // stop page refresh
            e.preventDefault();
            // dispatch onSubmit handler
            submitAction(data);
        }}>
        <div className="flex colWrap aCenter jCenter">
            {children}
        </div>
        <br/>
    </form>

FormWrapper.propTypes = {
    buttonName: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.array
    ]),
    data: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.array
    ]),
    submitAction: React.PropTypes.func,
}

export default FormWrapper
