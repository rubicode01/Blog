import React from "react";
import BigCard from "./BigCard";

function Home({ posts }) {
  //console.log(posts[0].fields);
  return (
    <>
      {
        //console.log(posts)
        posts.map((post) => (
          <>
            <BigCard key={post.sys.id} post={post}/>
            {/*<h3>{post.fields.title}</h3>
            <p className="details">{post.fields.author}</p>
            <p className="details">{post.fields.date}</p>
            <p>{post.fields.content}</p>
        <img src={post.fields.picture.fields.file.url} />*/}
          </>
        ))
        //Post ID: post.fields.sys.id
      }
    </>
  );
}

export default Home;
