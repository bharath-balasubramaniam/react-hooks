import React from "react";

function PostsForm({ name, place, test }) {
  return (
    <div>
      <form onSubmit={test}>
        <div className="row">
          <div className="col">
            <label htmlFor="userId">UserID:</label>
            <input
              type="text"
              value={name.userId}
              id="userId"
              name="userId"
              className="form-control"
              onChange={place}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              value={name.title}
              name="title"
              id="title"
              className="form-control"
              onChange={place}
            ></input>
          </div>
        </div>
        <div className="row">
          <label htmlFor="body">Body:</label>
          <textarea
            value={name.body}
            id="body"
            name="body"
            className="form-control"
            onChange={place}
          ></textarea>
        </div>
        <br />
        <div>
          <button type="submit" className="btn btn-primary spacearound">
            Submit
          </button>
          <button className="btn btn-danger spacearound">Reset</button>
        </div>
      </form>
      <br />
    </div>
  );
}

export default PostsForm;
