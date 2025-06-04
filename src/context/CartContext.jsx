import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
    const [cartItem,setCartItem] = useState(0);
    const handleCartItem = ()=>{
        setCartItem(cartItem+1);
    }
    return(
        <CartContext.Provider value={{cartItem,handleCartItem}}  > 
            {children}
        </CartContext.Provider>
    )
}