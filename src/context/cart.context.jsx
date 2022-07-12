import { createContext,useState } from "react";

const addCartItem = ( CartItems, productToAdd) => {
   const fromCartItem = CartItems.find((cartItem) => cartItem.id === productToAdd.id)
    if(fromCartItem) {
        return CartItems.map((cartItem) => 
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}: cartItem
            
            
        )
    }
    return [...CartItems, {...productToAdd, quantity: 1}]
}



export const CartContext = createContext({
    CartOpen: false,
    setCartOpen: () => {},
    CartItems: [],
    addItemToCart: () => {}
})

export const CartProvider = ({ children}) => {
    const [CartOpen, setCartOpen] = useState(false);
    const [CartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(CartItems, productToAdd));

    const value = { CartOpen, setCartOpen, CartItems, addItemToCart}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}