import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Home from "./components/Home";
import Authors from "./components/Authors";
import axios from "axios";
import AddPost from "./components/AddPost";

function App() {
  const [posts, setPosts] = useState([]);

  /*//Contentful
  const contentful = require("contentful");

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });*/

  useEffect(() => {
    //Fetch from blog backend
    axios
      .get("http://localhost:5000/api/posts")
      .then((response) => setPosts(response.data.posts))
      .catch(console.error);
    //Fetch from Contentful
    /*client
      .getEntries()
      .then((response) => {
        setPosts(response.items);
      })

      .catch(console.error);*/
  }, []);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/:id" element={<Post posts={posts} />}></Route>
        <Route path="/authors" element={<Authors posts={posts} />}></Route>
        <Route path="/newPost" element={<AddPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
