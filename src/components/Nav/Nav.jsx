import React from 'react';
import { Link } from 'react-router-dom';
import Find from '../Find/Find';
import './Nav.scss';
export default function Nav() {
  return (
    <nav>
      <div className="nav-left">
        <i className="fa-brands fa-instagram" />
        <p className="nav-left-bar" />
        <p>
          <Link to="/login" style={{ fontSize: '20px' }} className="instagram">
            Instagram
          </Link>
        </p>
      </div>
      <Find className="nav-center" />
      <div className="nav-right">
        <i className="fa-solid fa-magnifying-glass" />
        <i className="fa-regular fa-heart" />
        <i className="fa-regular fa-user" />
      </div>
    </nav>
  );
}
