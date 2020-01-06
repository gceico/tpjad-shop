import { generateContext } from '../../helpers'
import {
  CREATE_CART,
  CREATE_CART_FAIL,
  CREATE_CART_SUCCESS,
  DELETE_ITEM,
  DELETE_ITEM_FAIL,
  DELETE_ITEM_SUCCESS,
  GET_CART,
  GET_CART_FAIL,
  GET_CART_SUCCESS,
  UPDATE_ITEM,
  UPDATE_ITEM_FAIL,
  UPDATE_ITEM_SUCCESS,
} from './cart-actions'

const initialState = {
  cartId: undefined,
  cart: [],
  loading: false,
  error: undefined
}

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_CART:
      return {
        ...state
      }
    case CREATE_CART_SUCCESS:
      return {
        ...state,
        cartId: action.payload
      }
    case CREATE_CART_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case GET_CART:
      return {
        ...state
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload
      }
    case GET_CART_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case UPDATE_ITEM:
      return {
        ...state,
        success: false
      }
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        success: true
      }
    case UPDATE_ITEM_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case DELETE_ITEM:
      return {
        ...state,
        success: false
      }
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        success: true
      }
    case DELETE_ITEM_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

const { Context, ContextProvider } = generateContext(initialState, reducer)
export const CartContext = Context
export const CartContextProvider = ContextProvider
