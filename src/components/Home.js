import React from 'react'

function Home({posts}) {
  return (
    <>
        {
        
        //console.log(posts)
        posts.map((post) => (
            <>  
              <h3>{post.fields.title}</h3>
              <p>{post.fields.author}</p>
              <p>{post.fields.date}</p>
              <p>{post.fields.content}</p>
              <img src={post.fields.picture.fields.file.url}/>
            </>

        ))
        //Post ID: post.fields.sys.id
        }
    </>
  )
}

export default Home