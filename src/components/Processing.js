import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';

export default function Processing(props) {

    //simulates info being processed, then goes to next step
    setTimeout(() => {props.nextStep()}, 2500)

    return (
        <div>
            <Typography variant="h4">Processing...</Typography>
            <CircularProgress />
        </div>
    )
}
