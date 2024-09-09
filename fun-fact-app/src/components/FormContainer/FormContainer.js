import React from 'react';
import './Container.css';

const FormContainer = ({ children }) => {
    return (
        <div className="form-container">
            <header>
                <img 
                    src="https://see.fontimg.com/api/rf5/X2z9/YzQ1MDI5ZDY3MWZjNDlmOTlhNjIxM2UzMmY2MWFlNTkudHRm/RGlkIFlvdSBLbm93Pw/orange-juice.png?r=fs&h=91&w=1000&fg=A30909&bg=E0BAEC&tb=1&s=91" 
                    alt="Fun fonts" 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />
                        <h2 className="subheader">Dive into Endless Trivia: Where Curiosity Meets Fun!</h2><hr></hr></header>
            {children}
        </div>
    );
};

export default FormContainer;
