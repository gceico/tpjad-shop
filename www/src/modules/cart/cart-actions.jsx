import Axios from 'axios'
import _ from 'lodash'

import { API_URL } from '../../config'

export const CREATE_CART = 'CREATE_CART'
export const CREATE_CART_SUCCESS = 'CREATE_CART_SUCCESS'
export const CREATE_CART_FAIL = 'CREATE_CART_FAIL'
export const GET_CART = 'GET_CART'
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS'
export const GET_CART_FAIL = 'GET_CART_FAIL'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS'
export const UPDATE_ITEM_FAIL = 'UPDATE_ITEM_FAIL'
export const DELETE_ITEM = 'DELETE_ITEM'
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS'
export const DELETE_ITEM_FAIL = 'DELETE_ITEM_FAIL'

export const createCart = async ({ cartContext, accountId }) => {
  let response
  cartContext.dispatch({
    type: CREATE_CART
  })
  try {
    response = await Axios({
      url: `${API_URL}/carts`,
      method: 'post',
      data: { accountId }
    })
    cartContext.dispatch({
      type: CREATE_CART_SUCCESS,
      payload: response.data.id
    })
  } catch (err) {
    const error = _.get(err, 'response.data.errors')
    cartContext.dispatch({
      type: CREATE_CART_FAIL,
      payload: error
    })
  }
}

export const getCart = async ({ cartContext, cartId }) => {
  let response
  cartContext.dispatch({
    type: GET_CART
  })
  try {
    response = await Axios({
      url: `${API_URL}/carts/${1}`,
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

export const updateItemInCart = async ({ cartContext, cartId, item }) => {
  let response
  cartContext.dispatch({
    type: UPDATE_ITEM
  })
  try {
    response = await Axios({
      url: `${API_URL}/carts/${1}`,
      method: 'put',
      data: item
    })
    cartContext.dispatch({
      type: UPDATE_ITEM_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    const error = _.get(err, 'response.data.errors')
    cartContext.dispatch({
      type: UPDATE_ITEM_FAIL,
      payload: error
    })
  }
}

export const deleteItemFromCart = async ({ cartContext, cartId, itemId }) => {
  let response
  cartContext.dispatch({
    type: DELETE_ITEM
  })
  try {
    response = await Axios({
      url: `${API_URL}/carts/${1}?itemId=${itemId}`,
      method: 'delete'
    })
    cartContext.dispatch({
      type: DELETE_ITEM_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    const error = _.get(err, 'response.data.errors')
    cartContext.dispatch({
      type: DELETE_ITEM_FAIL,
      payload: error
    })
  }
}
// export const addToCart = async ({ cartContext, item }) => {
//   const { cart } = cartContext
//   cartContext.dispatch({
//     type: UPDATE_CART
//   })
//   try {
//     let cartUpdated = { ...cart }
//     cartUpdated[item.id] = { ...item, quantity: 1 }
//     cartContext.dispatch({
//       type: UPDATE_CART_SUCCESS,
//       payload: cartUpdated
//     })
//   } catch (err) {
//     cartContext.dispatch({
//       type: UPDATE_CART_FAIL,
//       payload: err.message
//     })
//   }
// }

// export const removeFromCart = async ({ cartContext, id }) => {
//   const { cart } = cartContext
//   cartContext.dispatch({
//     type: UPDATE_CART
//   })
//   try {
//     if (cart[id]) {
//       delete cart[id]
//       cartContext.dispatch({
//         type: UPDATE_CART_SUCCESS,
//         payload: cart
//       })
//     } else {
//       throw new Error(`No product with id ${id} to remove`)
//     }
//   } catch (err) {
//     cartContext.dispatch({
//       type: UPDATE_CART_FAIL,
//       payload: err.message
//     })
//   }
// }

// export const setQuantity = async ({ cartContext, id, quantity }) => {
//   const { cart } = cartContext
//   cartContext.dispatch({
//     type: UPDATE_CART
//   })
//   try {
//     if (cart[id]) {
//       cart[id].quantity = quantity
//       cartContext.dispatch({
//         type: UPDATE_CART_SUCCESS,
//         payload: cart
//       })
//     } else {
//       throw new Error(`No product with id ${id} to remove`)
//     }
//   } catch (err) {
//     cartContext.dispatch({
//       type: UPDATE_CART_FAIL,
//       payload: err.message
//     })
//   }
// }
