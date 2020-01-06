import UilCart from '@iconscout/react-unicons/icons/uil-cart'
import _ from 'lodash'
import React, { useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { CART_ROUTE, PRODUCTS_ROUTE } from '../../config'
import { CartContext } from '../../modules/cart/cart-context'
import Breadcrumbs from '../breadcrumbs/breadcrumbs'

export default function Header() {
  const cartContext = useContext(CartContext)
  const { cart } = cartContext
  const numberOfItems = _.size(cart)
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='#'>One true shop</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href={PRODUCTS_ROUTE}>Products</Nav.Link>
            <NavDropdown title='Categories' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#'>Laptops</NavDropdown.Item>
              <NavDropdown.Item href='#'>Phones</NavDropdown.Item>
              <NavDropdown.Item href='#'>Tabletes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#'>Accessories</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href={CART_ROUTE}>
              <UilCart />
              <Badge pill variant='danger'>
                {numberOfItems}
              </Badge>
            </Nav.Link>
            <NavDropdown title='Welcome, Gabriel' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#'>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Breadcrumbs />
    </>
  )
}
