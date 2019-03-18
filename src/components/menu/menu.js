import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

class Menu extends Component {
  render() {
    return (
      <>
      <nav>
          <ul>
            <li><Link to="/more">Showcase 404</Link></li>
          </ul>

      </nav>

      </>

    );
  }
}

export default Menu;
