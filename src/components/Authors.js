import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";


function Authors ({ posts }) {
    const allAuthors = [...posts];
   

    
  return (
    <>
      <Container className="carddesign containerdesign rowdesign">
    {allAuthors.length > 0 && (
 <>
 <h2>Authors</h2>
 {allAuthors.map((post) =>(
    
        // <p className="info">{post.fields.author}</p>

<div>
<img src="./author.png" alt='author' className="rounded-circle mb-3" style={{width:"150px"}}/>
  <strong><p>{post.author_id}</p></strong>
  <p >Author </p></div>
       
 ))}
 </>

    )}
     </Container>
    </>
  )
}

export default Authors