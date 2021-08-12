import React, { useState, useEffect } from "react";
import CommentsForm from "./CommentsForm";

function Comments() {
  const [comments, setComments] = useState([]);
  let [data, setData] = useState({});
  useEffect(() => {
    (async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/comments");
      let userData = await data.json();
      setComments([...userData]);
    })();
  }, []);
  const comment = [...comments];
  const getBackcomment = (event) => {
    setData({ ...event });
    console.log(data);
  };
  return (
    <>
      <h1>Blog Comments</h1>
      {console.log(data)}
      <CommentsForm info={data} />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Post Id</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((obj) => {
            return (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.postId}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.body}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => getBackcomment(obj)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Comments;
