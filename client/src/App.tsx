import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Footer } from './Footer/Footer';
import { Home } from './Home/Home';
import { Navbar } from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
            <Route path="/about">
              <div> about </div>
            </Route>
            <Route path="/news">
              <div> news </div>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
