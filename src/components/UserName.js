import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function UserName(props) {
    return (
            <React.Fragment>
                <h2>What is your...</h2>
                <TextField
                    id="filled-basic"
                    label="First Name"
                    variant="filled"
                    onChange={props.handleChange('firstName')}
                />
                <TextField
                    id="filled-basic"
                    label="Last Name"
                    variant="filled"
                    onChange={props.handleChange('lastName')}
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
