import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/logos/crown.svg";
import { removeUserInfo } from "../../redux/user/userActions";
import { localService } from "../../services/localService";
import CartDropDown from "../CartDropDown/CartDropDown";
import CartIcon from "../CartIcon/CartIcon";

import "./Header.scss";
const Header = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userReducer);
  const { isCartOpen } = useSelector((state) => state.cartReducer);

  const handleSignOut = () => {
    localService.removeUserInfo();
    dispatch(removeUserInfo());
  };
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
              {userInfo?.uid ? (
                <button className="sign-out-btn" onClick={handleSignOut}>
                  SIGN OUT
                </button>
              ) : (
                <Link to="/auth">SIGN IN</Link>
              )}
            </li>
            <li>
              <CartIcon />
              {isCartOpen && <CartDropDown />}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
