import Axios from 'axios'
import _ from 'lodash'

import { API_URL } from '../../config'
import { encodeFilters } from '../../helpers'

export const GET_CART = 'GET_CART'
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS'
export const GET_CART_FAIL = 'GET_CART_FAIL'
export const DELETE_CART = 'DELETE_CART'
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS'
export const DELETE_CART_FAIL = 'DELETE_CART_FAIL'

export const getCart = async ({ cartContext, filters }) => {
  const query = encodeFilters(filters)
  let response
  cartContext.dispatch({
    type: GET_CART
  })
  try {
    response = await Axios({
      url: `${API_URL}/cart?${query}`,
      method: 'get'
    })
    cartContext.dispatch({
      type: GET_CART_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    const error = _.get(err, 'response.data.errors')
    cartContext.dispatch({
      type: GET_CART_FAIL,
      payload: error
    })
  }
}
