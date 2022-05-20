import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Comment({ comment }) {
  return (
    <div className='comment'>
      <p className='text comment-date'>{comment.date}</p>
      <p className='text comment-author'>{comment.name}</p>
      <p className='text'>{comment.comment}</p>
    </div>
  )
}

export default Comment