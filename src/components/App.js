import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Intro from './Intro';

const theme = createMuiTheme({
    palette: {
      primary: grey,
    },
  });

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="static"
                color="primary"
                style={{textAlign: 'center'}}
            >
                <h1>The Form of Death!</h1>   
            </AppBar>
            <Container maxWidth="xs">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-around"
                margin="1rem"
                borderRadius="1rem"
            >
                <Intro />
            </Box>
            </Container>
        </ThemeProvider>
    )
}