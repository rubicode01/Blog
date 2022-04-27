import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { ContentfulClientApi } from "contentful";
import Router from "./components/Router";
import NavBar from './components/NavBar';

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

  },[])


  return (
  <div className="App">
    <NavBar/>
 
  {posts ? 
    <Router posts={posts} /> :
    <h2>Loading...</h2>
  
  }
  </div>);
}

export default App;
