import Axios from 'axios'
import _ from 'lodash'

import { API_URL } from '../../config'
import { encodeFilters } from '../../helpers'

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL'
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS'
export const DELETE_PRODUCTS_SUCCESS = 'DELETE_PRODUCTS_SUCCESS'
export const DELETE_PRODUCTS_FAIL = 'DELETE_PRODUCTS_FAIL'

export const getProducts = async ({ productsContext, filters }) => {
  const query = encodeFilters(filters)
  let response
  productsContext.dispatch({
    type: GET_PRODUCTS
  })
  try {
    response = await Axios({
      url: `${API_URL}/products?${query}`,
      method: 'get'
    })
    productsContext.dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    const error = _.get(err, 'response.data.errors')
    productsContext.dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error
    })
  }
}
