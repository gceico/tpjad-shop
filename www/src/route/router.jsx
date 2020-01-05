import React, { lazy, Suspense, useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Header from '../components/header/header'
import { CART_ROUTE, CHECKOUT_ROUTE, HOME_ROUTE, PRODUCTS_ROUTE } from '../config'
import PrivateRoute from './private-router'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <RouterContent loggedIn={true} />
    </BrowserRouter>
  )
}

export function RouterContent({ loggedIn }) {
  return (
    <Suspense fallback={<div />}>
      <Switch>
      <PrivateRoute
          path={CHECKOUT_ROUTE}
          allowed={loggedIn}
          component={lazy(() => import('../modules/checkout/checkout-router'))}
        />
        <PrivateRoute
          path={CART_ROUTE}
          allowed={loggedIn}
          component={lazy(() => import('../modules/cart/cart-router'))}
        />
        <PrivateRoute
          path={PRODUCTS_ROUTE}
          allowed={loggedIn}
          component={lazy(() => import('../modules/products/products-router'))}
        />
        <Route path='' render={() => <Redirect to={HOME_ROUTE} />} />
      </Switch>
    </Suspense>
  )
}
