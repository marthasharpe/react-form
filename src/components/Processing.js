import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Processing(props) {

    //simulates info being processed, then goes to next step
    setTimeout(() => {props.nextStep()}, 2500)

    return (
        <div>
            <h1>Processing...</h1>
            <CircularProgress />
        </div>
    )
}
