import React from "react";
import { useParams } from "react-router-dom";

function Post({ posts }) {
  console.log(posts);
  const { id } = useParams();
  const post = posts.find((post) => id === post.sys.id);
  return (
    <div>
      <div>
        <img
          fluid
          src={post.fields.picture.fields.file.url}
        />
      </div>
      <div>
        <h3>{post.fields.title}</h3>
        <p>author: {post.fields.author}</p>
        <p>date: {post.fields.date}</p>
        <br></br>
        <p>{post.fields.content}</p>
      </div>
    </div>
  );
}

export default Post;
