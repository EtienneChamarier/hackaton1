import { useState } from "react";
import Home from "./pages/Home";
import test from "./api/chatgpt_api";
import "./App.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(test.content);
  return (
    <div className="App">
      <Home />
      <p>{data}</p>
    </div>
  );
}

export default App;
