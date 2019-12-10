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
                    defaultValue={props.values.firstName}
                />
                <br/>
                <TextField 
                    hintText="Enter your last name"
                    floatingLabelText="Last Name"
                    onChange={props.handleChange('lastName')}
                    defaultValue={props.values.lastName}
                />
                <RaisedButton
                    label="Go Back"
                    priary={true}
                    onClick={props.prevStep}
                />
                <RaisedButton
                    label="Proceed"
                    priary={true}
                    onClick={props.nextStep}
                />
            </MuiThemeProvider>
        </div>
    )
}
