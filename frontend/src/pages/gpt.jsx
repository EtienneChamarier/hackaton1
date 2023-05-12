import React, { useState } from "react";
import test from "../api/chatgpt_api";

function gpt() {
  const [data, setData] = useState(test.content);
  console.info(setData);
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
export default gpt;
