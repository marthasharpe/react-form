import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'

export default function UserName(props) {
    return (
        <div>
            <MuiThemeProvider>
                <TextField 
                    hintText="Enter your first name"
                    floatingLabelText="First Name"
                    onChange={props.handleChange('firstName')}
                />
                <RaisedButton />
            </MuiThemeProvider>
        </div>
    )
}
