import Axios from 'axios'
import _ from 'lodash'

import { API_URL } from '../../config'
import { encodeFilters } from '../../helpers'

export const GET_CHECKOUT = 'GET_CHECKOUT'
export const GET_CHECKOUT_SUCCESS = 'GET_CHECKOUT_SUCCESS'
export const GET_CHECKOUT_FAIL = 'GET_CHECKOUT_FAIL'
export const DELETE_CHECKOUT = 'DELETE_CHECKOUT'
export const DELETE_CHECKOUT_SUCCESS = 'DELETE_CHECKOUT_SUCCESS'
export const DELETE_CHECKOUT_FAIL = 'DELETE_CHECKOUT_FAIL'

export const getCheckout = async ({ checkoutContext, filters }) => {
  const query = encodeFilters(filters)
  let response
  checkoutContext.dispatch({
    type: GET_CHECKOUT
  })
  try {
    response = await Axios({
      url: `${API_URL}/checkout?${query}`,
      method: 'get'
    })
    checkoutContext.dispatch({
      type: GET_CHECKOUT_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    const error = _.get(err, 'response.data.errors')
    checkoutContext.dispatch({
      type: GET_CHECKOUT_FAIL,
      payload: error
    })
  }
}
