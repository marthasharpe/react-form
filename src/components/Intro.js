import React, { useState } from 'react';
import UserName from './UserName';

export default function Intro() {
    const [step, setStep] = useState(1);
    const [values, setValues] = useState({
        name: '',
        city: '',
    })

    //Proceed to next step
    const nextStep = () => {
        setStep(step + 1);
    }

    //Return to previous step
    const prevStep = () => {
        setStep(step - 1);
    }

    //Handle field changes
    const handleChange = (input, e) => {
        setValues({...values, [input]: e.target.value})
    }
    

    switch(step) {
        case 1:
            return (
                <UserName 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        case 2:
            return (
                <h1>UserQuest</h1>
            )
        case 3:
            return (
                <h1>UserFavorites</h1>
            )
        default:
            return (
                <h1>Something's Wrong</h1>
            )

    }
}
