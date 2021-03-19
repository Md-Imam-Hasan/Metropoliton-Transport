import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className='container'>
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="ml-auto navbar-nav">
              <li className="nav-item mr-5">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item mr-5">
                <Link className="nav-link" to="/destination">Destination</Link>
              </li>
              <li className="nav-item mr-5">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item mr-5">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <Link to='/login'>
              <button className='btn btn-danger'>Login</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;