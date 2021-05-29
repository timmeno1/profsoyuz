import React from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />  
       <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-4xl font-bold">Some App</h1>    
    </div>
  );
}

export default App;
