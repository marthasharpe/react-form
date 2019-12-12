import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function UserQuest(props) {
    return (
        <React.Fragment>
            <h2>What is your...</h2>
            <TextField
                id="filled-basic"
                label="Occupation"
                variant="filled"
                onChange={props.handleChange('occupation')}
            />
            <TextField
                id="filled-basic"
                label="City"
                variant="filled"
                onChange={props.handleChange('city')}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={props.prevStep}
            >
                Go Back
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={props.nextStep}
            >
                Proceed
            </Button>
        </React.Fragment>
    )
}
