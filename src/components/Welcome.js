import React from 'react'
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

export default function Welcome(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Avatar alt="Bridge Keeper" src={pic} className={classes.bigAvatar}/>
            <p>Who would cross the Bridge of Death must answer me these questions three, ere the other side he see.</p>
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
