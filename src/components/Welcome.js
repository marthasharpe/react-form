import React from 'react'
import { Button, Avatar } from '@material-ui/core';
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
            <h1 className="heading">Stop!</h1>
            <Avatar
                alt="Bridge Keeper"
                src={pic}
                className={classes.bigAvatar}
            />
            <p>Who would cross the Bridge of Death must answer me<br/>these questions three, ere the other side he see.</p>
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
