import React from 'react';

import './form-input.scss';

const FormInput = ({ changeHandler, Label,  ...otherProps }) => (
    <div className="form-input-group">
        <label className={`
                ${Label ? 'form-label' : ''}
            `}>
            {Label}

        </label>

        <input className="form-input" onChange={changeHandler} {...otherProps} />

    </div>
)

export default FormInput;