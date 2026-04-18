import { createContext } from 'react'

export const CartContext = createContext({
    cartProducts: [],
    addCartProducts: () => { },
    removeCartProducts: () => { },
    deleteCartProduct : () => {},
});
