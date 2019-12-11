import React from 'react';
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Intro from './Intro';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#636363',
      },
      secondary: {
        main: '#212121',
        contrastText: 'white',
      },
    },
  });

export default function App() {
    return (
        <ThemeProvider theme={theme}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            bgcolor="secondary.main"
        >
            <AppBar
                position="static"
                color="primary"
                style={{textAlign: 'center'}}
            >
                <h1>The Form of Death!</h1>   
            </AppBar>
            <Intro />
        </Grid>
        </ThemeProvider>
    )
}