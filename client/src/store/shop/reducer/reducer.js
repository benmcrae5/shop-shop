import * as CONST from "../constants";
import { useReducer } from "react";

export default (state, action) => {
  switch (action.type) {
    case CONST.UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case CONST.ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case CONST.ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case CONST.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

    case CONST.REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CONST.CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case CONST.TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case CONST.UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case CONST.UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};
