import React from 'react';
import { Button, TextField, Grid, Typography } from '@material-ui/core';

export default function UserQuest(props) {
    return (
        <React.Fragment>
            <Typography variant="h4">What is your...</Typography>
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
