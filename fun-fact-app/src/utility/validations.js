

const getDaysInMonth = (month) => {
    const daysInMonth = {
        '1': 31,
        '2': 29, 
        '3': 31,
        '4': 30,
        '5': 31,
        '6': 30,
        '7': 31,
        '8': 31,
        '9': 30,
        '10': 31,
        '11': 30,
        '12': 31
    };
    return daysInMonth[month] || 0;
};

export const validateDateInput = (value, setError) => {
    if (!value) {
        setError(''); 
        return true;
    }

    const [month, day] = value.split('/').map(Number);
    if (!month || month < 1 || month > 12 ) {
        setError('Please enter a valid month (1-12).');
        return false;
    }


    if (value.includes('/') && (day === 0 || String(day).match(/^0+$/)) ){
        setError('Day cannot be 0 or blank.');
        return false;
    }

  
    if ((day ===0|| day > getDaysInMonth(month))) {
        
        setError('Please enter a valid day.');
        return false;
    }
    setError(''); 

    if(value.includes('/')&& day==='') setError('');
    return true;
};


export const validateNumberInput = (value, setError) => {
    if (value.trim() === '') {
        setError('');
        return true;
    }

    const numberPattern = /^[0-9]+$/;
    if (!numberPattern.test(value)) {
        setError('Please enter a valid number.');
        return false;
    }

    setError('');
    return true;
};

export const validateMathInput = (value, setError) => {
    if (value.trim() === '') {
        setError('');
        return true;
    }

    const numberPattern = /^[0-9]+$/;
    if (!numberPattern.test(value)) {
        setError('Please enter number only.');
        return false;
    }

    setError('');
    return true;
};

