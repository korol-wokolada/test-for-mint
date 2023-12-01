import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="header__list">
        <li className="list__item">
          <NavLink to="/" className="list__link">
            Все
          </NavLink>
        </li>

        <li className="list__item">
          <NavLink to="/Designers" className="list__link">
            Designers
          </NavLink>
        </li>

        <li className="list__item">
          <NavLink to="/Analysts" className="list__link">
            Analysts
          </NavLink>
        </li>

        <li className="list__item">
          <NavLink to="/Managers" className="list__link">
            Managers
          </NavLink>
        </li>

        <li className="list__item">
          <NavLink to="/IOS" className="list__link">
            IOS
          </NavLink>
        </li>

        <li className="list__item">
          <NavLink to="/Android" className="list__link">
            Android
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
