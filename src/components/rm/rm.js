import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './rm.scss';

class RMERROR extends Component {

  render() {
    return (
      <div className="background-img">
        <div className="space"></div>
        <div className="wrapper">
          <div className="img-wrapper">
          <span>44</span>
          </div>
          <p>The page you are looking for has been <br /> moved to another universe. </p>
          <Link to="/"><button type="button">GET ME HOME</button></Link>
        </div>
      </div>
    );
  }

}

export default RMERROR;
