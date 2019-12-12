import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import pic from './../bridge-keeper.png';

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
                <Avatar alt="Bridge Keeper" src={pic} className={classes.bigAvatar}/>
                <h1>Failure!</h1>
                <p>You did not answer all my questions!</p>
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
                <Avatar alt="Bridge Keeper" src={pic} className={classes.bigAvatar}/>
                <h1>Success!</h1>
                <p>Well done {state.firstName} {state.lastName}, {state.occupation} of {state.city}. You may pass.</p>
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
