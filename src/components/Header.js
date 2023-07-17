import React from 'react';
import logo from '../images/Logo.svg';
import { Link, useMatch } from 'react-router-dom';

const Header = ({ isLoggedIn, userEmail }) => {
  const signUp = useMatch('sign-up');
  const signIn = useMatch('sign-in');
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
        {isLoggedIn && (
          <>
            <p className="header__email">{userEmail}</p>
            <Link
              className="header__action"
              to="/sign-in">
              Выйти
            </Link>
          </>
        )}
        {signUp && (
          <Link
            className="header__action"
            to="/sign-in">
            Войти
          </Link>
        )}
        {signIn && (
          <Link
            className="header__action"
            to="/sign-up">
            Регистрация
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
