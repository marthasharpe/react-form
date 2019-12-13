import React from 'react';
import { Button, Avatar, Typography } from '@material-ui/core';
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
                <Typography variant="h4">Failure!</Typography>
                <Avatar
                    alt="Into the Gorge"
                    src={gorge}
                    className={classes.bigAvatar}
                />
                <Typography variant="body1">You did not answer all of my questions!<br/>You are cast into the Gorge of Eternal Peril!</Typography>
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
                <Typography variant="h4">Success!</Typography>
                <Avatar
                    alt="Sir Lancelot"
                    src={lancelot}
                    className={classes.bigAvatar}
                />
                <Typography variant="body1">Well done {state.firstName} {state.lastName}, {state.occupation} of {state.city}!<br/>You answered all my questions. Off you go.</Typography>
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
