import React, { Component } from "react";

//behaves like an <a/> tag
import {Link} from 'react-router-dom'

import logo from "./../../images/dm_white_logo.png";
import "./Nav.css";


class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
          <img src={logo} alt="dm logo" />
        </div>
        <ul>
          <li>
            {/* add link tags and path */}
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
