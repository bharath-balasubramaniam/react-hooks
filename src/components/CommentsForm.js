import React, { useEffect, useState } from "react";

function CommentsForm({ info }) {
  const [cmnt, setCmnt] = useState({
    id: "",
    postId: "",
    name: "",
    email: "",
    body: "",
  });

  useEffect(() => {
    if (info.id) {
      setCmnt({
        id: info.id,
        postId: info.postId,
        name: info.name,
        email: info.email,
        body: info.body,
      });
      console.log(cmnt);
    }
  }, [info]);

  const changeHandler = ({ target: { name, value } }) => {
    setCmnt({ [name]: value });
    console.log("hii");
    console.log(name, value);
    console.log(cmnt[name]);
    console.log(cmnt);
  };
  const HandleSubmit = async (event) => {
    event.preventDefault();
    let { id, postId, name, email, body } = cmnt;
    console.log(postId, name, email, body);
    let data = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          postId: postId,
          name: name,
          email: email,
          body: body,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    let commentData = await data.json();
    console.log(commentData);
    console.log(cmnt);
  };
  return (
    <div>
      <form>
        <div className="row">
          <div className="col">
            <label htmlFor="postId">PostID:</label>
            <input
              type="text"
              value={cmnt.postId}
              id="postId"
              name="postId"
              className="form-control"
              onChange={changeHandler}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={cmnt.name}
              name="name"
              id="name"
              className="form-control"
              onChange={changeHandler}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              value={cmnt.email}
              id="email"
              name="email"
              className="form-control"
              onChange={changeHandler}
            ></input>
          </div>
          {/* <div className="col">
            <label htmlFor="title">Body:</label>
            <input
              type="text"
                value={info.body}
              name="title"
              id="title"
              className="form-control"
              //   onChange={}
            ></input>
          </div> */}
        </div>
        <div className="row">
          <label htmlFor="body">Body:</label>
          <textarea
            value={cmnt.body}
            id="body"
            name="body"
            className="form-control"
            onChange={changeHandler}
          ></textarea>
        </div>
        <br />
        <div>
          <button
            className="btn btn-primary spacearound"
            onClick={HandleSubmit}
          >
            Submit
          </button>
          <button className="btn btn-danger spacearound">Delete</button>
        </div>
      </form>
    </div>
  );
}

export default CommentsForm;
