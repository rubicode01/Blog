import logo from "./logo.svg";
import "./App.css";
import { ContentfulClientApi } from "contentful";

function App() {
  
  const contentful = require("contentful");

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  client
    .getEntries()
    .then((response) => console.log(response.items))
    .catch(console.error);

  return <div className="App"></div>;

}

export default App;
