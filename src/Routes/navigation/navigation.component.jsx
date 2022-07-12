import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as Logo } from "../../assets/CHILLY.svg";

import { signOutUser } from "../../Utils/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { CartOpen } = useContext(CartContext)
  return (
    <Fragment>
      <div className="nav">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {CartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
