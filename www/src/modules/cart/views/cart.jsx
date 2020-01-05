import UilTrash from '@iconscout/react-unicons/icons/uil-trash'
import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import Loader from '../../../components/loader/loader'
import { CHECKOUT_ROUTE, PRODUCTS_ROUTE } from '../../../config'
import { getCart } from '../cart-actions'
import { CartContext } from '../cart-context'
import { CartQuantity } from '../cart-styles'

export default function Cart() {
  const cartContext = useContext(CartContext)
  const { loading, cart } = cartContext
  useEffect(() => {
    getCart({ cartContext })
  }, [])

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
          <tr>
            <td>Macbook Pro</td>
            <td>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eius tenetur
              deleniti.
            </td>
            <td>12 RON</td>
            <td>
              <CartQuantity>
                <Form.Control
                  style={{ maxWidth: 128, marginLeft: 'auto' }}
                  type='number'
                  placeholder='Eg. 2'
                />
                <Button size={'sm'} variant={'danger'}>
                  <UilTrash />
                </Button>
              </CartQuantity>
            </td>
            <td>12 RON</td>
          </tr>
        </tbody>
      </Table>
      <Form.Group as={Row}>
        <Col>
          <Button variant={'light'} href={PRODUCTS_ROUTE}>
            Continue shopping
          </Button>
          <Button href={CHECKOUT_ROUTE}>Place Order</Button>
        </Col>
      </Form.Group>
    </>
  )
}
