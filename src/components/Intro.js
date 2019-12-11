import React, { useState } from 'react';
import UserName from './UserName';
import Welcome from './Welcome';
import UserQuest from './UserQuest';
import UserFavorites from './UserFavorites';
import Success from './Success';
import Processing from './Processing';

export default function Intro() {
    const [step, setStep] = useState(1);
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        occupation: '',
        city: '',
        color: '',
        season: '',
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
    const handleChange = input => e => {
        setValues({...values, [input]: e.target.value})
    }
    

    switch(step) {
        case 1:
            return (
                <Welcome 
                    nextStep={nextStep}
                />
            )
        case 2:
            return (
                <UserName 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        case 3:
            return (
                <UserQuest />
            )
        case 4:
            return (
                <UserFavorites />
            )
        case 5:
            return (
                <Processing />
            )
        case 6:
            return (
                <Success />
            )
        default:
            return (
                <h1>Oops</h1>
            )
    }
}
