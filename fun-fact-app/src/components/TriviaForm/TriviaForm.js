import React, { useState } from 'react';
import FormContainer from '../FormContainer/FormContainer';
import InputField from '../InputFields/InputField';
import FactDisplay from '../TriviaFacts/TriviaFacts';
import { fetchNumberFact, fetchDateFact, fetchMathTrivia } from '../../utility/TriviaApi';
import { validateNumberInput, validateDateInput, validateMathInput } from '../../utility/validations';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function TriviaForm() {
    const [numberInput, setNumberInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [mathInput, setMathInput] = useState('');
    const [numberFact, setNumberFact] = useState('');
    const [dateFact, setDateFact] = useState('');
    const [mathFact, setMathFact] = useState('');
    const [numberError, setNumberError] = useState('');
    const [dateError, setDateError] = useState('');
    const [mathError, setMathError] = useState('');
    const [isCalled, setIsCalled] = useState(false);

    const handleNumberChange = (e) => {
        const value = e.target.value; //e.trget.value will pnt to the curent vlue in th input field
        setNumberInput(value);
        validateNumberInput(value, setNumberError);
        if (value.trim() === '') setNumberFact('');
        setIsCalled(false); 
    };

    const handleDateChange = (e) => {
        const value = e.target.value;
        setDateInput(value);
        const parts = value.split('/');
        if (parts.length > 1 && parts[1] === '') {
       setDateFact('');
          }


        if (value.length < 0 && value.length !== 5) {
            setDateFact('');
        }else{
            validateDateInput(value,setDateError);
        }
        if (value.trim() === '') setDateFact(''); setIsCalled(false);
       
    };

    const handleMathChange = (e) => {
        const value = e.target.value;
        setMathInput(value);
        validateMathInput(value, setMathError);
        if (value.trim() === '') setMathFact('');
        setIsCalled(false); 
    };

    const fetchFact = async (type) => {
        if (!isCalled) { 
            if (type === 'number' && numberInput.trim() !== '' && !numberError) {
                const fact = await fetchNumberFact(numberInput, setNumberError);
                setNumberFact(fact);
            } else if (type === 'date' && dateInput.trim() !== '' && !dateError) {
                const [month, day] = dateInput.split('/').map(num => num.trim());
                if (month && day) {
                    const fact = await fetchDateFact(month, day, setDateError);
                    setDateFact(fact);
                }
            } else if (type === 'math' && mathInput.trim() !== '' && !mathError) {
                const fact = await fetchMathTrivia(mathInput, setMathError);
                setMathFact(fact);
            }
            setIsCalled(true); 
        }
    };

    const handleBlur = (type) => {
        if (!isCalled) {
            fetchFact(type);
        }
    };

    const handleKeyDown = (e, type) => {
        if (e.key === 'Enter') {
            fetchFact(type);
        }
    };

    //rendering
    return (
        <FormContainer>
            <InputField
                label="Fun fact about a Number:"
                value={numberInput}
                onChange={handleNumberChange}
                onBlur={() => handleBlur('number')}
                onKeyDown={(e) => handleKeyDown(e, 'number')}  
                errorMessage={numberError}
                placeholder="Enter any number:"
            />
            <ErrorMessage message={numberError} />
            <FactDisplay fact={numberFact} />
            

            <InputField
                label="Fun fact about a Date:"
                value={dateInput}
                onChange={handleDateChange}
                onBlur={() => handleBlur('date')}
                onKeyDown={(e) => handleKeyDown(e, 'date')}  
                errorMessage={dateError}
                placeholder="Enter a month & date (MM/DD)"
            />
            <ErrorMessage message={dateError} />
            <FactDisplay fact={dateFact} />

            <InputField
                label="Math Trivia about a Number:"
                value={mathInput}
                onChange={handleMathChange}
                onBlur={() => handleBlur('math')}
                onKeyDown={(e) => handleKeyDown(e, 'math')} 
                errorMessage={mathError}
                placeholder="Enter any number:"
            />
            <ErrorMessage message={mathError} />
            <FactDisplay fact={mathFact} />
        </FormContainer>
    );
}

export default TriviaForm;


