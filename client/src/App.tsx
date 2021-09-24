import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/redux-store'

import './App.css'
import { FooterContainer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'
import { News } from './pages/News/News'
import { AboutUsContainer } from './pages/About/About'
import { Manage } from './pages/Manage/Manage'
import HomeContainer from './pages/Home/HomeContainer'
import { JoinContainer } from './pages/Join/JoinContainer'
import { BackToTopBtn } from './common/BackToTopBtn'

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
              <Route path="/">
                <HomeContainer />
              </Route>
            </Switch>
          <FooterContainer />
          <BackToTopBtn />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
