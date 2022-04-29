
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
  <Image variant="top" src="https://picsum.photos/seed/picsum/200/150" />
  <Card.Body>
    <Card.Title>{post.fields.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="secondary" to="#">Read more about</Button>
  </Card.Body>
</Card>
</Container>
  )
  }

export default SmallCard