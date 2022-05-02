import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { ContentfulClientApi } from "contentful";
import BigCard from "./components/BigCard"
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Home from "./components/Home";

function App() {
  const [posts, setPosts] = useState([]);

  //Contentful
  const contentful = require("contentful");

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setPosts(response.items);
      })

      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <NavBar />


      <Routes>
        <Route path="/" element={<Home posts={posts}/>}/>
        <Route path="/:id" element={<Post posts={posts}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
