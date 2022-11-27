import React from 'react';

const ChoiceInput = ({type='checkbox',label,validationError,name,onChange,required,checked,value}) => {
    return (
        <div className="form-group mb-3">
            <label className="form-check">
                <input
                    type={type}
                    value={value}
                    className={`form-check-input ${validationError[name]?'is-invalid':''}`}
                    name={name}
                    onChange={onChange}
                    checked={checked}/>
                <span className="form-check-label">{label}</span>
                <div className="text-danger">{validationError[name]}</div>
            </label>
        </div>
    );
};

export default ChoiceInput;