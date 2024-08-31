import React from 'react';
import { Link } from "gatsby";

import MainMenu from '../menu';
import logo from '../../../static/images/logo.png';

const Header = () => (

  <header className="header">
    <div className="contain">
      <Link to="/" className="header-logo">
        <img alt="" src={logo} /> svrgnty.com
      </Link>
      <div className="menu">
         <MainMenu /> 
      </div>
    </div>
  </header>

);

export default Header;