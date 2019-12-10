import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import Intro from './Intro';

export default function Container() {
    return (
        <MuiThemeProvider>
            <AppBar title="The Form of Death!"/>
            <Intro />
        </MuiThemeProvider>
    )
}