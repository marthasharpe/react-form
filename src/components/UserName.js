import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'

export default function UserName() {
    return (
        <div>
            <MuiThemeProvider>
                <TextField 
                    hintText="Enter your name"
                    floatingLabelText="Name"
                />
                <RaisedButton />
            </MuiThemeProvider>
        </div>
    )
}
