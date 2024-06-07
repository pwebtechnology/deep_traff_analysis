import { NavLink } from "react-router-dom";

import { NAV_LINKS } from "../utils";

import logo from "../../../assets/images/logo.svg";

import "../../../assets/styles/layout/Header.scss";

export const Header = () => (
  <header className="header">
    <div className="header__logo">
      <NavLink className="logo" to="/">
        <img src={logo} alt="logo" />
      </NavLink>
    </div>

    <ul className="header__list">
      {NAV_LINKS.map((link) => (
        <li key={link.path} className="header__item">
          <NavLink className="header__link" to={link.path}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </header>
);
