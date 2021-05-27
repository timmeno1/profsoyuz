import { red } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';


const outerTheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: '#b2dfdb',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <div className="container mx-auto">
        <Navbar />  
        <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-4xl font-bold">Some App</h1>    
      </div>
    </ThemeProvider>
  );
}

export default App;
