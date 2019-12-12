import React from 'react';
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';

export default function UserFavorites(props) {
    return (
        <React.Fragment>
            <h2>What is your...</h2>
            <FormControl component="fieldset">
                <FormLabel component="legend">Favorite Color</FormLabel>
                <RadioGroup
                    aria-label="colors"
                    name="colors"
                    onChange={props.handleChange('color')}
                >
                    <FormControlLabel value="red" control={<Radio color="default"/>} label="Red" />
                    <FormControlLabel value="orange" control={<Radio color="default" />} label="Orange" />
                    <FormControlLabel value="yellow" control={<Radio color="default" />} label="Yellow" />
                    <FormControlLabel value="green" control={<Radio color="default" />} label="Green" />
                    <FormControlLabel value="blue" control={<Radio color="default" />} label="Blue" />
                    <FormControlLabel value="purple" color="purple" control={<Radio color="default" />} label="Purple" />
                </RadioGroup>
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                onClick={props.prevStep}
            >
                Go Back
            </Button>
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
