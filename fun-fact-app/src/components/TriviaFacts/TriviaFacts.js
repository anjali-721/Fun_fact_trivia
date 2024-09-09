import React from 'react';
import './TriviaFacts.css';
const TriviaFact = ({ fact }) => {
    return (
        
        <p className="factDisplay">{fact}</p>
        
    );
};

export default TriviaFact;
