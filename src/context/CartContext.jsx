import React, { createContext, useContext, useEffect, useReducer } from "react";

// --- 1. Define actions
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QTY = "UPDATE_QTY";
const CLEAR_CART = "CLEAR_CART";

// --- 2. Initial state (from localStorage or empty)
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

// --- 3. Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const { item, quantity } = action.payload;
      const exists = state.find((i) => i.id === item.id);
      if (exists) {
        return state.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...state, { ...item, quantity }];
    }
    case REMOVE_ITEM:
      return state.filter((i) => i.id !== action.payload.id);
    case UPDATE_QTY:
      return state.map((i) =>
        i.id === action.payload.id
          ? { ...i, quantity: action.payload.quantity }
          : i
      );
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
}

// --- 4. Context
const CartContext = createContext();

// --- 5. Provider
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Persist to localStorage on changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Action creators
  const addItem = (item, qty = 1) =>
    dispatch({ type: ADD_ITEM, payload: { item, quantity: qty } });
  const removeItem = (id) => dispatch({ type: REMOVE_ITEM, payload: { id } });
  const updateQty = (id, quantity) =>
    dispatch({ type: UPDATE_QTY, payload: { id, quantity } });
  const clearCart = () => dispatch({ type: CLEAR_CART });

  // Expose cart + actions
  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// --- 6. Hook for easy access
export const useCart = () => useContext(CartContext);
