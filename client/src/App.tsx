import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Footer } from './Footer/Footer';
import { Home } from './pages/Home/Home';
import { Navbar } from './Navbar/Navbar';
import { News } from './pages/News/News';
import { Join } from './pages/Join/Join';
import { About } from './pages/About/About';
import { Manage } from './pages/Manage/Manage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
            <Route path="/manage">
              <Manage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer />
        <div className="fixed-action-btn">
            <i className="medium grey-text bi bi-arrow-up-circle-fill"></i>
        </div>
      </div>
    </Router>
  );
}

export default App;
