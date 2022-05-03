import React from "react";
import { useParams } from "react-router-dom";

function Post({ posts }) {
  //console.log(posts);
  const { id } = useParams();
  const post = posts.find((post) => id === post.sys.id);
  console.log(post)
  const pictureUrl = post.fields.picture.fields.file.url;
  const date = post.fields.date;

  /*const getDateFormat = (date) =>{
    let days = date.getDate();
    let months = date.getMonth();
    let years = date.getFullYear();
    let dateFormat = days + ":" + months + ":" + years;
    return dateFormat;
  }
*/
  return (
    <div>
      <h1>{post.fields.title}</h1>
      <p><h5>{post.fields.author} : </h5><h6>{date}</h6></p>
      <div>
        <img
          fluid
          src={pictureUrl} alt={post.fields.title}

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
