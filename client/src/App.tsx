import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';

function App() {
  return (
    <Container disableGutters={true} maxWidth={false} >
      <Navbar />
    </Container>
  );
}

export default App;
