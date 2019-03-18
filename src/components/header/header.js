import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from 'assets/img/logo.png';
class Header extends Component {

  render() {
    return (
      <header className="App-header">
        <div className="background-image">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Rick and Morty</p>

        <ul>
          <li><Link className="handwriting" to="/episodes">Episodes</Link></li>
          <li><Link className="handwriting" to="/characters">Characters</Link></li>
          <li><Link className="handwriting" to="/locations">Locations</Link></li>
        </ul>
      </header>
    );
  }

}

export default Header;
