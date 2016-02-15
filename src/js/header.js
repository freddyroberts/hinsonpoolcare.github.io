import React, { PropTypes } from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  render () {
    return (
      <header  className="header" role="header">
        <Link className='logo' to='/home'>HPC</Link>
        <Link className='desktop-logo' to='/home'>Hinson Pool Care</Link>
        <nav className='nav' role="navigation">
            <Link className="links" to='/estimates'>Estimates</Link>
            <Link className="links" to='/about'>About</Link>
            <Link className="links" to='/contact'>Contact</Link>
        </nav>
      </header>
    )
  }
}

export default Header;
