import { useContext } from 'react';
import { ReactComponent as Remove } from '../../assets/x-symbol.svg';
import { CartContext } from '../../context/cart.context';

import './check-out.styles.scss'

const CheckOutList = ({cartItem}) => {
    const {CartItems, addItemToCart} = useContext(CartContext)
    const { name, quantity, imageUrl, price } = cartItem;
    return(
        <div>
            <img src={imageUrl} alt={`${name}`} />
            <span className="name">{name}</span>
            <span className="price">
          <span>decrement</span> {quantity} <span onClick={() => addItemToCart (cartItem)}>increment</span>  ${price}
        </span>
            <Remove className="remove-icon "/>
        </div>
    )
}

export default CheckOutList