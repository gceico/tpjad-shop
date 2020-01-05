import React from 'react'
import Form from 'react-bootstrap/Form'

export default function DefaultInput({
  meta: { touched, error },
  input,
  label,
  ...rest
}) {
  return (
     <Form.Group>
     <Form.Label>{label}</Form.Label>
      <Form.Control {...input} {...rest} />
      {/* {touched && error && <InputError>{error}</InputError>} */}
     </Form.Group>
  )
}
