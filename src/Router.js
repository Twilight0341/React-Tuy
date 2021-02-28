import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Get from "./Component/Get";
import App from "./App";
import Login from "./Component/Login";
import Register from "./Component/Register";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/Get" exact component={Get} />
      <Route path="/app" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Router;
