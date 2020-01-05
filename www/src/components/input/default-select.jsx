import _ from 'lodash'
import React from 'react'
import Form from 'react-bootstrap/Form'

export default function DefaultSelect({
  meta: { touched, error },
  input,
  label,
  options,
  ...rest
}) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...input} {...rest} as='select'>
        {_.map(options, item => (
          <option value={item.value}>{item.name}</option>
        ))}
      </Form.Control>
      {/* {touched && error && <InputError>{error}</InputError>} */}
    </Form.Group>
  )
}
