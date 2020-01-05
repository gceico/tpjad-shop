import React from './node_modules/react'
import Spinner from './node_modules/react-bootstrap/Spinner'

export default function Loader () {
  return (<Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>)
}