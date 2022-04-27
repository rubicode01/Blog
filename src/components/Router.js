import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Post from "./Post"

function Router({posts}) {
  return (
    <Routes>
      <Route path="/" element={<Home posts={posts}/>}></Route>
      <Route path="post/:id" element={<Post />}></Route>
    </Routes>
  );
}

export default Router;
