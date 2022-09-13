import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './header.css';

const Header = () => (
  <div className="main-haeder">

    <img src={Logo} alt="Calculator" className="logo" />

    <ul>
      <li><Link to="/">Home </Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>

  </div>
);

export default Header;
