import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign">
      <h1 className="sign__title">Регистрация</h1>
      <form
        onSubmit={handleSubmit}
        id="register-form"
        className="sign__form">
        <label
          htmlFor="email"
          className="sign__field"></label>
        <input
          required
          placeholder="Email"
          id="email"
          name="email"
          className="sign__input"
          type="text"
          value={formValue.email}
          onChange={handleChange}
        />
        <label
          htmlFor="password"
          className="sign__field"></label>
        <input
          required
          placeholder="Пароль"
          id="password"
          name="password"
          className="sign__input"
          type="password"
          value={formValue.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="sign__button">
          Зарегистрироваться
        </button>
      </form>
      <div className="sign__signin">
        <p className="sign__signin-desc">Уже зарегистрированы?</p>
        <Link
          to="/sign-in"
          className="sign__signin-link">
          Войти
        </Link>
      </div>
    </div>
  );
}
