import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul className="header__items">
        <Link to="/">
          <li className="nav__items--link">plant planner</li>
        </Link>
        <Link to="/plantmatch">
          <li className="nav__items--link nav__items--link-center">
            get matched
          </li>
        </Link>
        <Link to="/about">
          <li className="nav__items--link">contact</li>
        </Link>
      </ul>
    </div>
  );
}
export default Header;
