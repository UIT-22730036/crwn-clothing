import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/logos/crown.svg";
import { ReactComponent as ShoppingBag } from "../../assets/logos/shopping-bag.svg";

import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container--logo">
          <Link to="/">
            <CrwnLogo />
          </Link>
        </div>
        <div className="header__container--nav">
          <ul>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/auth">SIGN IN</Link>
            </li>
            <li>
              <ShoppingBag className="shopping-icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
