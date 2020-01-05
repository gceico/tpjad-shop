import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Field, Form } from 'react-final-form'

import DefaultInput from '../../../components/input/default-input'
import DefaultSelect from '../../../components/input/default-select'
import { CART_ROUTE } from '../../../config'
import checkoutValidator from './checkout-validator'

export default function CheckoutForm({ onSubmit, errors, loading }) {
  const [isVatPayer, setIsVatPayer] = useState(false)
  const [isCorporation, setIsCorporation] = useState(false)
  return (
    <Form
      onSubmit={onSubmit}
      validate={checkoutValidator}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Field
                component={DefaultInput}
                label={'First name'}
                type={'text'}
                name={'firstName'}
                placeholder={'Eg. James'}
              />
            </Col>
            <Col md={6}>
              <Field
                component={DefaultInput}
                label={'Last name'}
                type={'text'}
                name={'lastName'}
                placeholder={'Eg. Doe'}
              />
            </Col>
            <Col md={12}>
              <Field
                component={DefaultInput}
                label={'Complete address'}
                type={'text'}
                name={'address'}
                placeholder={
                  'Eg. Bucuresti, str. Cantemir, no. 23, bl. S12, sc. A, ap. 32'
                }
              />
            </Col>
            <Col md={12}>
              <Field
                component={DefaultSelect}
                label={'Payment method'}
                options={[{ value: 'cash', name: 'Cash' }]}
                name={'payment'}
                placeholder={'Eg. Cash'}
              />
            </Col>
            <Col>
              <Button variant={'light'} href={CART_ROUTE}>
                Cancel
              </Button>
              <Button>Place order</Button>
            </Col>
          </Row>
        </form>
      )}
    />
  )
}
