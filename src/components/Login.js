import React from 'react';

export default function Login({ handleLogin }) {
  return (
    <div className="sign">
      <h1 className="sign__title">Вход</h1>
      <form
        // onSubmit={handleSubmit}
        id="login-form"
        className="sign__form">
        <label
          htmlFor="login-email"
          className="sign__field"></label>
        <input
          required
          placeholder="Email"
          id="login-email"
          name="login-email"
          className="sign__input"
          type="text"
          // value={formValue.email}
          // onChange={handleChange}
        />
        <label
          htmlFor="login-password"
          className="sign__field"></label>
        <input
          required
          placeholder="Пароль"
          id="login-password"
          name="login-password"
          className="sign__input"
          type="password"
          // value={formValue.password}
          // onChange={handleChange}
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
