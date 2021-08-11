
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Container/Navbar'
import Home from './Container/Home'
import Places from './Container/Palces';
import AboutPlace from './Container/AboutPlace';
import { Route } from 'react-router';
import About from './Container/About'

function App() {

  return (
    <>
      <Navbar />
      <Route exact path="/">
        <hr />
        <Home />
      </Route>
      <Route path="/places">
        <Places />
      </Route>
      <Route path="/aboutplace">
        <AboutPlace />
      </Route>
      <Route path="/AboutIndia">
        <About />
      </Route>
    </>
  );

}

export default App;
