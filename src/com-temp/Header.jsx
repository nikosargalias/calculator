import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <ul>
      <li>
        <NavLink activeClassName="is-active" exact={true} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" exact={true} to="/AddExpense">
          Add Expense
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" exact={true} to="/Help">
          Help
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
