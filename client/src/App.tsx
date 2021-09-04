import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/redux-store'

import './App.css'
import { Footer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'
import { News } from './pages/News/News'
import { AboutUsContainer } from './pages/About/About'
import { Manage } from './pages/Manage/Manage'
import HomeContainer from './pages/Home/HomeContainer'
import { JoinContainer } from './pages/Join/JoinContainer'

function App() {
  return (

    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
              <Route path="/manage">
                <Manage />
              </Route>
              <Route path="/about">
                <AboutUsContainer />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/join">
                <JoinContainer />
              </Route>
              <Route exact path="/">
                <HomeContainer />
              </Route>
            </Switch>
          <Footer />
          <div className="fixed-action-btn">
              <i className="medium grey-text bi bi-arrow-up-circle-fill"></i>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
