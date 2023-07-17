import React from 'react';

export default function Register() {
  return (
    <div className="sign">
      <h1 className="sign__title">Регистрация</h1>
      <form
        // onSubmit={handleSubmit}
        id="register-form"
        className="sign__form">
        <label
          htmlFor="register-email"
          className="sign__field"></label>
        <input
          required
          placeholder="Email"
          id="register-email"
          name="register-email"
          className="sign__input"
          type="text"
          // value={formValue.email}
          // onChange={handleChange}
        />
        <label
          htmlFor="register-password"
          className="sign__field"></label>
        <input
          required
          placeholder="Пароль"
          id="register-password"
          name="register-password"
          className="sign__input"
          type="password"
          // value={formValue.password}
          // onChange={handleChange}
        />
        <button
          type="submit"
          className="sign__button">
          Зарегистрироваться
        </button>
      </form>
      <div className="sign__signin">
        <p className="sign__signin-desc">Уже зарегистрированы?</p>
        <a
          href="/login"
          className="sign__signin-link">
          Войти
        </a>
      </div>
    </div>
  );
}
