import React from 'react';
import './InputField.css';

const InputField = ({ label, value, onChange, onKeyDown, onBlur, placeholder}) => {
    return (
        <div className="input-group">
            
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}  
                onBlur={onBlur}
                placeholder={placeholder}
            />  
           
        </div>
        );
};

export default InputField;
