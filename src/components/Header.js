import React from 'react';
import logo from '../images/Logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img
          src={logo}
          alt="Логотип 'Место'"
          className="header__logo"
        />
        <button className="header__hamburger header__hamburger_active"></button>
      </div>
      <div className="header__auth-container header__auth-container_active">
        <p className="header__email">email@some.com</p>
        <a
          className="header__action"
          href="/login">
          Выйти
        </a>
      </div>
    </header>
  );
};

export default Header;
