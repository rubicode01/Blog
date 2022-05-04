
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import {Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function SmallCard ({post}) {
// console.log(post)
  

  return (


<>


    <Card style={{marginTop:"1rem",marginLeft:"auto", marginRight:"auto"}}>
  <Image style={{height:'10rem',  resizeMode:'resize'}} className="image" src={post.fields.picture.fields.file.url} />
  <Card.Body style={{height:'5rem'}} >
    <Card.Title>{post.fields.title}</Card.Title>
   
  </Card.Body >
  <Card.Footer className='linkcard'>
  <Link to={post.sys.id}><Button className="btn-card" variant="secondary" size="sm"  >Read more</Button></Link>
  </Card.Footer>
  <Card.Footer>
     
      <small className="text-muted" >{post.fields.date}</small>
    </Card.Footer>
</Card>
</>
  )
  }

export default SmallCard