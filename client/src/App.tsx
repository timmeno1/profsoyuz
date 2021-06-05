import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home'

function App() {
  return (
    <Container disableGutters={true} maxWidth={false} >
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;
