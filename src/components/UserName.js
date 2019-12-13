import React from 'react';
import { Button, TextField, Grid, Typography } from '@material-ui/core';

export default function UserName(props) {
    return (
        <React.Fragment>
            <Typography variant="h4">What is your...</Typography>
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
            <Grid container justify="center" spacing={2}>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={props.prevStep}
                    >
                        Go Back
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={props.nextStep}
                    >
                        Proceed
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
