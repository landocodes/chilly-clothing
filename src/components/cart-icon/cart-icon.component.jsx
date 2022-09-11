import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { CartOpen, setCartOpen, CartCount} = useContext(CartContext)

  const toggleCart = () => setCartOpen(!CartOpen)
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleCart} />
      <span className="item-count">{CartCount}</span>
    </div>
  );
};

export default CartIcon;

