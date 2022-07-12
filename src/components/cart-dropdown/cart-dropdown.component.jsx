import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../Button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { CartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const handleNavigate = () => {
      navigate("/checkout")
  } 
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      {CartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      </div>
      <Button onClick={handleNavigate}>GO TO CHECKOUT</Button>
     
     
    </div>
  );
};
export default CartDropdown;
