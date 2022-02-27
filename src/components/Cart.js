import React, { createContext, useReducer } from 'react';
import './Cart.css';
import { products } from './Products';
import ContextCart from './ContextCart';
import { Reducer } from './Reducer';

const initialState = {
    item:products,
    totalAmount: 0,
    totalItem: 0,
}

export const CartContext = createContext();
const Cart = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    // const[item, setItem] = useState(products);
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    const clearCart = () => {
        return dispatch ({
            type: "CLEAR_CART"
        })
    }

    const increment = (id) => {
        return dispatch ({
            type: "INCREMENT",
            payload: id,
        })
    }
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        })
    }
  return (
  <>
  <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
     <ContextCart/>
  </CartContext.Provider>
  </>
  );
};

export default Cart;
