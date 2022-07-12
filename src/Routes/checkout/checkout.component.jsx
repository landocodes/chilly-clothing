import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckOutList from "../../components/checkout/check-out.component";

const CheckOut = () => {
    const { CartItems } = useContext(CartContext);

    return (
        <div className="cart-items" >
      {CartItems.map((item) => (
        <CheckOutList key={item.id} cartItem={item} />
      ))}
      </div>
      );
}

export default CheckOut;