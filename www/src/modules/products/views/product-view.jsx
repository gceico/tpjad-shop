import _ from 'lodash'
import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import Loader from '../../../components/loader/loader'
import { getProducts } from '../products-actions'
import { ProductsContext } from '../products-context'

export default function ProductView() {
  const productsContext = useContext(ProductsContext)
  const { loading, products } = productsContext
  useEffect(() => {
    getProducts({ productsContext })
  }, [])

  if (loading) {
    return <Loader/>
  }
  return (
    <>
      <CardColumns>
        {_.map(products, item => (
            <Card>
              <Card.Img variant='top' src={item.photo} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.category}</Card.Text>
                <Card.Text>{item.price} RON</Card.Text>
                <Button variant='primary'>Add to cart</Button>
                <Button href={'#'} variant='link'>Details</Button>
              </Card.Body>
            </Card>
        ))}
      </CardColumns>
    </>
  )
}
