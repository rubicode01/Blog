
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import {Row} from 'react-bootstrap'


function SmallCard ({post}) {
// console.log(post)
  

  return (


<>



    <Card style={{marginTop:"1rem",marginLeft:"auto", marginRight:"auto" }}>
  <Image style={{height:'10rem', width:'auto', resizeMode:'cover'}} src={post.fields.picture.fields.file.url} />
  <Card.Body >
    <Card.Title>{post.fields.title}</Card.Title>
    <Button variant="secondary" to="#">Read more about</Button>
  </Card.Body>
  <Card.Footer>
      <small >{post.fields.date}</small>
    </Card.Footer>
</Card>

</>
  )
  }

export default SmallCard