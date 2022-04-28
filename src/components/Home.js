import React from "react";
import BigCard from "./BigCard";

function Home({ posts }) {
  console.log(posts);
  return (
    <>
      {
        //console.log(posts)
        posts.map((post) => (
          <>
            <BigCard key={post.sys.id} post={post}/>
          </>
        ))
        //Post ID: post.sys.id
      }
    </>
  );
}

export default Home;
