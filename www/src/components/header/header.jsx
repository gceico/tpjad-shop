import UilCart from '@iconscout/react-unicons/icons/uil-cart'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { CART_ROUTE, PRODUCTS_ROUTE } from '../../config'
import Breadcrumbs from '../breadcrumbs/breadcrumbs'

export default function Header() {
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
