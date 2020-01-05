import { generateContext } from '../../helpers'
import {
  DELETE_CHECKOUT,
  DELETE_CHECKOUT_FAIL,
  DELETE_CHECKOUT_SUCCESS,
  GET_CHECKOUT,
  GET_CHECKOUT_FAIL,
  GET_CHECKOUT_SUCCESS,
} from './checkout-actions'

const initialState = {
  checkout: [],
  deleted: {},
  loading: false,
  error: undefined
}

const reducer = (state, action) => {
  switch (action.type) {
    case GET_CHECKOUT:
      return {
        ...state,
        loading: true
      }
    case GET_CHECKOUT_SUCCESS:
      return {
        ...state,
        checkout: action.payload,
        loading: false
      }
    case GET_CHECKOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
      case DELETE_CHECKOUT:
        return {
          ...state,
          loading: true
        }
      case DELETE_CHECKOUT_SUCCESS:
        return {
          ...state,
          loading: false
        }
      case DELETE_CHECKOUT_FAIL:
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
export const CheckoutContext = Context
export const CheckoutContextProvider = ContextProvider
