
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'


function SmallCard({post}) {
console.log(post)
  

  return (


<Container fluid>


    <Card style={{ width: '18rem' }}>
  <Image variant="top" src={post.fields.picture.fields.file.url} />
  <Card.Body>
    <Card.Title>{post.fields.title}</Card.Title>
    <Button variant="secondary" to="#">Read more about</Button>
  </Card.Body>
  <Card.Footer>
      <small className="text-muted">{post.fields.date}</small>
    </Card.Footer>
</Card>
</Container>
  )
  }

export default SmallCard