import React from 'react';
import { Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import gorge from './../into-the-gorge.png';
import lancelot from './../lancelot.png';

const useStyles = makeStyles({
    bigAvatar: {
      width: 200,
      height: 200,
    },
  });

//if all fields were completed, render success
//if not, render failure

export default function Success(props) {
    const classes = useStyles();
    const state = props.values;

    if (Object.values(state).includes('')) {
        return (
            <React.Fragment>
                <h1>Failure!</h1>
                <Avatar
                    alt="Into the Gorge"
                    src={gorge}
                    className={classes.bigAvatar}
                />
                <p>You did not answer all my questions! You are cast into the Gorge of Eternal Peril!</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.reset}
                >
                    Try Again
                </Button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h1>Success!</h1>
                <Avatar
                    alt="Sir Lancelot"
                    src={lancelot}
                    className={classes.bigAvatar}
                />
                <p>Well done {state.firstName} {state.lastName}, {state.occupation} of {state.city}. You answered all my questions. Off you go.</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.reset}
                >
                    Go Again
                </Button>
            </React.Fragment>
        )
    }
}
