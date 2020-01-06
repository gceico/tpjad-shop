import UilTrash from '@iconscout/react-unicons/icons/uil-trash'
import _ from 'lodash'
import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import Loader from '../../../components/loader/loader'
import { CHECKOUT_ROUTE, PRODUCTS_ROUTE } from '../../../config'
import { deleteItemFromCart, getCart, updateItemInCart } from '../cart-actions'
import { CartContext } from '../cart-context'
import { CartQuantity } from '../cart-styles'

export default function Cart() {
  const cartContext = useContext(CartContext)
  const { loading, cart, cartId } = cartContext

  useEffect(() => {
    getCart({ cartContext, cartId })

    // if (cartId) {
    //   getCart({ cartContext, cartId })
    // } else {
    //   createCart({ cartContext, accountId: 1 })
    // }
  }, [])

  const onItemDelete = itemId => deleteItemFromCart({ cartContext, cartId, itemId })

  const onQuantityChange = (item, quantity) => {
    console.log(quantity, 'sss')
    if (_.isNumber(parseInt(quantity, 10))) {
      updateItemInCart({ cartContext, cartId, item })
    }
  }

  if (loading) {
    return <Loader />
  }
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price/Unit</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {_.map(cart, item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <CartQuantity>
                  <Form.Control
                    style={{ maxWidth: 128, marginLeft: 'auto' }}
                    type='number'
                    placeholder='Eg. 2'
                    onChange={e => onQuantityChange(item, e.value)}
                  />
                  <Button
                    size={'sm'}
                    variant={'danger'}
                    onClick={() => onItemDelete(item.id)}
                  >
                    <UilTrash />
                  </Button>
                </CartQuantity>
              </td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form.Group as={Row}>
        <Col>
          <Button variant={'link'} href={PRODUCTS_ROUTE}>
            Continue shopping
          </Button>
          <Button href={CHECKOUT_ROUTE}>Place Order</Button>
        </Col>
      </Form.Group>
    </>
  )
}
