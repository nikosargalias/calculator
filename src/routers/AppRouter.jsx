import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import HomePage from "../components/HomePage";
import PageNotFound from "../components/PageNotFound";
import Header from "../components/Header";

const routes = (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/addExpense" component={AddExpensePage} exact={true} />
      <Route path="/edit:id" component={EditPage} exact={true} />
      <Route path="/help" component={HelpPage} exact={true} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.querySelector("#app"));
