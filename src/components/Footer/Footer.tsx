import logo from '../../images/logo--white.svg';
import arrowUp from '../../images/arrows/arrow-top.svg';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

const handleClick = () => document.body.scrollIntoView({
  behavior: 'smooth',
});

export const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__logo">
        <NavLink className="logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <ul className="footer__list">
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://transwell.retool.com/apps/e044f23c-6132-11ee-a457-f3360542412f/Affiliate/Affiliate%20Campaign%20dashboard%20-%20Total"
            target="_blank"
            rel="noreferrer"
          >
            Total Affiliate Dashboard
          </a>
        </li>

        <li className="footer__item">
          <a
            className="footer__link"
            href="https://transwell.retool.com/apps/0f9a9124-ff07-11ed-8c22-e325f6c3a77b/Affiliate/Potentials%20by%20Campaign"
            target="_blank"
            rel="noreferrer"
          >
            Potentials Dashboard
          </a>
        </li>

        <li className="footer__item">
          <a
            className="footer__link"
            href="https://transwell.retool.com/apps/13fe78b8-6369-11ee-b6f3-6f22fca9b97a/Affiliate/Dashboard%20Total"
            target="_blank"
            rel="noreferrer"
          >
            30/60/90 Dashboard
          </a>
        </li>
      </ul>

      <button
        className="footer__button button"
        type="button"
        onClick={handleClick}
      >
        <span className="button__text">Back to top</span>

        <div className="button__image">
          <img src={arrowUp} alt="arrow up" />
        </div>
      </button>
    </div>
  </footer>
);
