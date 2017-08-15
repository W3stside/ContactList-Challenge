import React from 'react';
// STYLES
import { button } from '../styles/button.scss'

const SubmitButton = ({name, status}) => {
    return (
        <button
            className={button}
            disabled={status}
            type="submit"
            >
        {name}
        </button>
    );
};

SubmitButton.propTypes = {
    name: React.PropTypes.string,
    status: React.PropTypes.bool
};

export default SubmitButton;
