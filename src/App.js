import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/home/home';
import More from 'pages/more/more';
import Characters from 'pages/characters/characters.js';
import Locations from 'pages/locations/locations.js';
import Episodes from 'pages/episodes/episodes.js';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/more' component={More}/>
          <Route exact path='/episodes' component={Episodes}/>
          <Route exact path='/characters' component={Characters}/>
          <Route exact path='/locations' component={Locations}/>
        </Switch>
      </>
    );
  }
}

export default App;
