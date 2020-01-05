import { generateContext } from '../../helpers'
import {
  DELETE_PRODUCTS,
  DELETE_PRODUCTS_FAIL,
  DELETE_PRODUCTS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from './products-actions'

const initialState = {
  products: [],
  deleted: {},
  loading: false,
  error: undefined
}

const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
      case DELETE_PRODUCTS:
        return {
          ...state,
          loading: true
        }
      case DELETE_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false
        }
      case DELETE_PRODUCTS_FAIL:
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
export const ProductsContext = Context
export const ProductsContextProvider = ContextProvider
