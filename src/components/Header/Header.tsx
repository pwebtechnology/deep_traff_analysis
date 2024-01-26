import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__content">
      <div className="header__logo">
        <NavLink className="logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <ul className="header__list">
        <li className="header__item">
          <a className='header__link' href="#total-table">Total table</a>
        </li>

        <li className="header__item">
          <a className='header__link' href="#compare-table">Cohorts affiliates compare</a>
        </li>

        <li className="header__item">
          <a className='header__link' href="#summary-charts">Summary on charts</a>
        </li>
      </ul>
    </div>
  </header>
);