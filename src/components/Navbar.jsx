import React from "react";
//CSS
import "../styles/Navbar.css";
//Fonts
import {
  faAddressCard,
  faBriefcase,
  faBookReader,
  faPaperPlane,
  faMoon,
  faAngleDoubleLeft,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar__nav">
          <li className="logo">
            <a className="navbar__link" href="">
              <FontAwesomeIcon
                id="navbar__logo"
                className="navbar__icon"
                icon={faAngleDoubleLeft}
              />
              <span className="navbar__text">Portafolio</span>
            </a>
          </li>
          <l1 className="navbar__item">
            <a className="navbar__link" href="#">
              <FontAwesomeIcon className="navbar__icon" icon={faHome} />
              <span className="navbar__text">Inicio</span>
            </a>
          </l1>
          <l1 className="navbar__item">
            <a className="navbar__link" href="#">
              <FontAwesomeIcon className="navbar__icon" icon={faAddressCard} />
              <span className="navbar__text">Sobre Mi</span>
            </a>
          </l1>
          <l1 className="navbar__item">
            <a className="navbar__link" href="#">
              <FontAwesomeIcon className="navbar__icon" icon={faBookReader} />
              <span className="navbar__text">Resumen</span>
            </a>
          </l1>
          <l1 className="navbar__item">
            <a className="navbar__link" href="#">
              <FontAwesomeIcon className="navbar__icon" icon={faBriefcase} />
              <span className="navbar__text">Proyectos</span>
            </a>
          </l1>
          <l1 className="navbar__item">
            <a className="navbar__link" href="#">
              <FontAwesomeIcon className="navbar__icon" icon={faPaperPlane} />
              <span className="navbar__text">Contacto</span>
            </a>
          </l1>
          <l1 className="navbar__item">
            <a className="navbar__link" href="#">
              <FontAwesomeIcon className="navbar__icon" icon={faMoon} />
              <span className="navbar__text">Dark Mode</span>
            </a>
          </l1>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
