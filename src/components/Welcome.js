import React from 'react'
import { Button, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import pic from './../bridge-keeper.png';

const useStyles = makeStyles({
    bigAvatar: {
      width: 200,
      height: 200,
    },
  });

export default function Welcome(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h4">Stop!</Typography>
            <Avatar
                alt="Bridge Keeper"
                src={pic}
                className={classes.bigAvatar}
            />
            <Typography variant="body1">Who would cross the Bridge of Death must answer me these questions three, ere the other side he see.</Typography>
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
