import React from 'react';
import Intro from './components/Intro';
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const grey = {backgroundColor: '#424242'}

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <AppBar title="The Form of Death!" style={grey}/>
      </MuiThemeProvider>
      <Intro />
    </div>
  );
}

export default App;
