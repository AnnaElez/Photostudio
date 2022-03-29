import React, { useState } from 'react';
import FormCard from '../UI/FormCard/FormCard';
import Button from '../UI/Button/Button';
import classes from './Form.module.css';
import useInput from '../hooks/useInput';


const Form = (props) => {

    const {
        value: enteredName,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        valueBlurHandler: nameBlurHandler,
        isValid: nameIsValid } = useInput(value => value.trim() !== '' && value.trim().length > 2);

    const {
        value: enteredPhone,
        hasError: phoneInputHasError,
        valueChangeHandler: phoneChangeHandler,
        valueBlurHandler: phoneBlurHandler,
        isValid: phoneIsValid } = useInput(value => value.trim() !== '' && value.trim().length > 8);

    const {
        value: enteredAmount,
        hasError: amountInputHasError,
        valueChangeHandler: amountChangeHandler,
        valueBlurHandler: amountBlurHandler,
        isValid: amountIsValid } = useInput(value => value.trim() > 1);

    const [newClient, setNewClient] = useState(false);

    let formIsValid = false;


    const isNewClient = () => {
        setNewClient((prevNewClient) => !prevNewClient);
    };


    const onCancel = props.onCancel;

    if (nameIsValid && phoneIsValid && amountIsValid) {
        formIsValid = true
    }

    const submitOrderHandler = (clientData) => {
        fetch('https://foodorder-17472-default-rtdb.firebaseio.com/PHOTOSTUDIO_ORDERS.json', {
            method: 'POST',
            body: JSON.stringify({
                clientData
            })
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!nameIsValid || !phoneIsValid || !amountIsValid) {
            return;
        }

        submitOrderHandler({
            name: enteredName,
            phone: enteredPhone,
            amount: enteredAmount,
            time: props.time
        })

        onCancel();
    }





    return (

        <FormCard className={classes.login}>
            <div className={classes.backdrop} onClick={onCancel}></div>
            <form onSubmit={submitHandler}>
                <label>Booking photostudio at {props.time}</label>
                <div
                    className={`${classes.control} 
                ${nameInputHasError ? classes.invalid : ''}`}
                >
                    <label htmlFor="name">Name</label>

                    <input
                        type='text'
                        id='name'
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                        value={enteredName} />
                </div>
                <div
                    className={`${classes.control} 
                    ${phoneInputHasError ? classes.invalid : ''}`}
                >
                    <label htmlFor="phone">Phone</label>
                    <input
                        placeholder='+374'
                        type='number'
                        id='number'
                        onChange={phoneChangeHandler}
                        onBlur={phoneBlurHandler}
                        value={enteredPhone} />
                </div>

                <div className={`${classes.control} 
                    ${amountInputHasError ? classes.invalid : ''}`}>
                    <label>How many guests?</label>
                    <input
                        type='number'
                        min='2'
                        step='1'
                        max='20'
                        onChange={amountChangeHandler}
                        onBlur={amountBlurHandler}
                        value={enteredAmount}/>
                </div>



                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                        onClick={isNewClient}>
                        Add
                    </Button>
                    <Button
                        type='button'
                        onClick={onCancel}>
                        Close</Button>
                </div>
            </form>

        </FormCard>

    );
};

export default Form;
