import React from 'react'
import Button from '@material-ui/core/Button';

export default function Welcome(props) {
    return (
        <React.Fragment>
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
