import React from 'react';
import { Box, Container, AppBar, Paper, Typography } from '@material-ui/core';
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
                <Typography variant="h3">The Form of Death</Typography>   
            </AppBar>
            <Container maxWidth="xs">
                <Paper>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="space-around"
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