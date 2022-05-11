import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Comment() {
  return (
    <div className='comment'>
      <p className='text comment-date'>01.01.1999</p>
      <p className='text comment-author'>Pa Ul</p>
      <p className='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Comment