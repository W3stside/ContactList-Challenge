import React from 'react';

const InputField = ({handleChange, inputName, labelName, placeholder, style}) => {
    return (
        <div className={style}>
            <label className="marginRightAuto">{labelName}</label>
            <input
                name={inputName}
                onChange={ (input) => {
                    handleChange(input.target.value);
                }}
                placeholder={placeholder}
            />
        </div>
    );
};

InputField.propTypes = {
    handleChange: React.PropTypes.func.isRequired,
    inputName: React.PropTypes.string,
    labelName: React.PropTypes.string,
    placeholder: React.PropTypes.string.isRequired,
    style: React.PropTypes.string
};

export default InputField;
