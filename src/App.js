import React, { useState } from "react";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import "./index.css";
function App() {
  const [showComments, setShowComments] = useState(false);
  return (
    <div>
      <button
        className="btn btn-info"
        onClick={() => setShowComments(!showComments)}
      >
        Comments
      </button>
      {showComments ? <Comments /> : <></>}
      {!showComments ? <Posts /> : <></>}
    </div>
  );
}

export default App;
