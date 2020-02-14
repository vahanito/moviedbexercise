import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <Link to="/" className="navbar-brand">MovieDB</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/search" className="nav-link">Search</Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
