import _ from 'lodash'
import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Loader from '../../../components/loader/loader'
import { getProducts } from '../products-actions'
import { ProductsContext } from '../products-context'

export default function ProductsList() {
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
      <Row flexStart>
        {_.map(products, item => (
          <Col lg={2}>
            <Card>
              {/* <Card.Img variant='top' src='https://picsum.photos/286/180' /> */}
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.category}</Card.Text>
                <Card.Text>{item.price} RON</Card.Text>
                <Button variant='primary'>Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
