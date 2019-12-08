import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

import "./login.style.sass";

export function Login() {
  const [state, setState] = React.useState({ login: "", password: "" });
  const onLoginChange = e => {
    setState({ login: e.target.value, password: state.password });
  };
  const onPasswordChange = e => {
    setState({ login: state.login, password: e.target.value });
  };
  const onSubmitLogin = () => {
    console.log("STATE:", state);
    fetch("https://localhost:44365/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(state)
    });
  };

  return (
    <div className="login">
      <Header />
      <div className="login__content">
        <div className="auth-form">
          <div className="auth-form__title">Вход </div>
          <div className="auth-form__description">
            Войдите на сайт для доступа к партнерской программе и оплаты
            мероприятий
          </div>
          <div className="auth-form__login">
            <label className="auth-form__label">Login</label>
            <input
              className="auth-form__input"
              value={state.login}
              onChange={onLoginChange}
              placeholder="Login"
            />
          </div>
          <div className="auth-form__password">
            <label className="auth-form__label">Password</label>
            <input
              className="auth-form__input"
              type="password"
              placeholder="password"
              onChange={onPasswordChange}
              value={state.password}
            />
          </div>
          <button onClick={onSubmitLogin} className="auth-form__button">
            Войти
          </button>
          <div className="auth-form__registration">
            <div className="auth-form__text">Нет аккаунта?</div>
            <Link to="/registration" className="auth-form__link">
              Create
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
