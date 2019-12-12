import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

//simulate sending info to a database with setTimeout
//then go to next step

export default function Processing(props) {

    setTimeout(() => {props.nextStep()}, 3000)

    return (
        <div>
            <h1>Processing...</h1>
            <CircularProgress />
        </div>
    )
}
