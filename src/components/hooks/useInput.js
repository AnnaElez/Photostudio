import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !enteredValue && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };


    const valueBlurHandler = () => {
        setIsTouched(true);
    }

    return {
        value: enteredValue,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        isValid: valueIsValid
    }



}

export default useInput;