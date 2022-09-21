import { createContext,useEffect,useState } from "react";

const addCartItem = ( CartItems, productToAdd) => {
   const fromCartItem = CartItems.find((cartItem) => cartItem.id === productToAdd.id)
    if(fromCartItem) {
        return CartItems.map((cartItem) => 
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}: cartItem
            
            
        )
    }
    return [...CartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = ( cartItems, productToremove) => {
    const fromCartItem = cartItems.find((cartItem) => cartItem.id === productToremove.id)
     if(fromCartItem) {
         return cartItems.map((cartItem) => 
             cartItem.id === productToremove.id ? {...cartItem, quantity: cartItem.quantity - 1}: cartItem
             
             
         )
     }
     return [...cartItems, {...productToremove, quantity: 1}]
 }

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount : 0,
    removeItemToCart: () => {},
    clearItemFromCart: () => {},
    cartTotal : 0
})

export const CartProvider = ({ children}) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

useEffect(() => {
    const theCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
setCartCount(theCartCount) }, [cartItems])

useEffect(() => {
    const theCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price,0)
setCartTotal(theCartTotal) }, [cartItems])



    const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

    const removeItemToCart = (productToremove) =>
    setCartItems(removeCartItem(cartItems, productToremove));

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
      };



    const value = { cartOpen, setCartOpen, cartItems, addItemToCart, cartCount, removeItemToCart,  clearItemFromCart, cartTotal}

    return  <CartContext.Provider value={value}>{children}</CartContext.Provider>
}