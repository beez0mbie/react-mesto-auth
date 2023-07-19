import React, { useState } from 'react';
import * as apiAuth from '../utils/ApiAuth';
import { useNavigate } from 'react-router-dom';

export default function Login({ handleLogin, handleInfoPopup, handleSetEmail }) {
  const navigate = useNavigate();
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
    apiAuth
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          handleLogin();
          handleSetEmail(formValue.email);
          navigate('/', { replace: true });
        }
      })
      .catch(() => handleInfoPopup(false));
  };

  return (
    <div className="sign">
      <h1 className="sign__title">Вход</h1>
      <form
        onSubmit={handleSubmit}
        id="login-form"
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
          Войти
        </button>
      </form>
    </div>
  );
}
