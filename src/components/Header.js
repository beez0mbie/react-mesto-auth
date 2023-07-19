import React, { useState } from 'react';
import logo from '../images/Logo.svg';
import { Link, useMatch } from 'react-router-dom';
import { CurrentUserContext } from '../contexts';

const Header = ({ isLoggedIn, handleExit }) => {
  const curentUser = React.useContext(CurrentUserContext);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
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
        <button
          onClick={() => setIsHamburgerActive((prevState) => !prevState)}
          className={`header__hamburger ${isHamburgerActive && 'header__hamburger_active'}`}
        />
      </div>
      <div
        className={`header__auth-container ${
          isHamburgerActive && 'header__auth-container_active'
        }`}>
        {isLoggedIn && (
          <>
            <p className="header__email">{curentUser.email}</p>
            <Link
              onClick={handleExit}
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
