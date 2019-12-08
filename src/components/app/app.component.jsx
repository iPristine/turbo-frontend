import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Main } from "../../layouts/main/main.component";
import { Login } from "../../layouts/login/login.component";
import { Registration } from "../../layouts/registration/registartion.component";
import { User } from "../../layouts/user/user.component";
import "./app.style.sass";

export function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
    </div>
  );
}
