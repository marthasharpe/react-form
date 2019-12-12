import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

export default function UserQuest(props) {
    return (
        <React.Fragment>
            <h2 className="heading">What is your...</h2>
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
