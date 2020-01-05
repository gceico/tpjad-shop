import React, { useContext, useEffect, useState } from 'react'

import Loader from '../../../components/loader/loader'
import { getCheckout } from '../checkout-actions'
import { CheckoutContext } from '../checkout-context'
import CheckoutForm from './checkout-form'

export default function Checkout() {
  const checkoutContext = useContext(CheckoutContext)
  const { loading, checkout } = checkoutContext

  const onSubmit = (values) => {console.log(values)}

  useEffect(() => {
    getCheckout({ checkoutContext })
  }, [])

  if (loading) {
    return <Loader />
  }
  return (
     <CheckoutForm onSubmit={onSubmit}/>
  )
}
