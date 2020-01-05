import { generateContext } from '../../helpers'
import { DELETE_CART, DELETE_CART_FAIL, DELETE_CART_SUCCESS, GET_CART, GET_CART_FAIL, GET_CART_SUCCESS } from './cart-actions'

const initialState = {
  cart: [],
  deleted: {},
  loading: false,
  error: undefined
}

const reducer = (state, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        loading: true
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        loading: false
      }
    case GET_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
      case DELETE_CART:
        return {
          ...state,
          loading: true
        }
      case DELETE_CART_SUCCESS:
        return {
          ...state,
          loading: false
        }
      case DELETE_CART_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
    default:
      return state
  }
}

const { Context, ContextProvider } = generateContext(initialState, reducer)
export const CartContext = Context
export const CartContextProvider = ContextProvider
