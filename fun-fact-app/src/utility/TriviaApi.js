
import axios from 'axios';

export const fetchNumberFact = async (number, setError) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${number}`);
        setError('');  // Clear any previous error
        return response.data;
    } catch (error) {
        console.error('Error fetching number fact:', error);
        setError('Oops! The API went on vacation. Try again later.');
        return '';
    }
};

export const fetchDateFact = async (month, day, setError) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${month}/${day}/date`);
        setError('');  // Clear any previous error
        return response.data;
    } catch (error) {
        console.error('Error fetching date fact:', error);
        setError('Oops! The API went on vacation. Try again later.');
        return '';
    }
};

export const fetchMathTrivia = async (number, setError) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${number}/math`);
        setError('');  // Clear any previous error
        return response.data;
    } catch (error) {
        console.error('Error fetching math trivia:', error);
        setError('Oops! The API went on vacation. Try again later.');
        return '';
    }
};

export default {
    fetchNumberFact,
    fetchDateFact,
    fetchMathTrivia
};
