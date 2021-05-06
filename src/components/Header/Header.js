import React from 'react';
import './Header.css';
import { IoMenuOutline, IoOptions, IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header--container">
          <Link className="link" to={`/`}>
            <IoArrowBackOutline className="return" />
          </Link>
          <h1 className="header--container__tittle">fruits</h1>
        </div>

        <div className="header--container">
          <IoMenuOutline className="hamburguer-menu" />
          <IoOptions className="option" />
        </div>
      </div>
    </header>
  );
};

export default Header;
