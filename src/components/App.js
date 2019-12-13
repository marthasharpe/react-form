import React from 'react';
import { Box, Container, AppBar, Paper } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import State from './State';
import Signature from './Signature/Signature';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: "#424242",
      }
    },
  });

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="static"
                color="primary"
            >
                <h1>The Form of Death</h1> 
            </AppBar>
            <Container maxWidth="xs">
                <Paper>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="space-evenly"
                        margin="1rem"
                        borderRadius="1rem"
                        height="500px"
                    >
                        <State />
                    </Box>
                </Paper>
            </Container>
            <Signature />
        </ThemeProvider>
    )
}