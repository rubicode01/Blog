import React from 'react'

function Home({posts}) {
  return (
    <>
        {posts.map((post) => (
            <>
            <h3>{post.fields.title}</h3>
            <p className="details">{post.fields.author}</p>
            <p className="details">{post.fields.date}</p>
            <p>{post.fields.content}</p>
            <img src={post.fields.picture.fields.file.url} />
            </> //Post ID: post.fields.sys.id
        ))}
    </>
  )
}

export default Home