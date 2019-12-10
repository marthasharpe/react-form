import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default function Welcome(props) {
    return (
        <MuiThemeProvider>
            <RaisedButton
                label="Proceed"
                onClick={props.nextStep}
                />
        </MuiThemeProvider>
    )
}
