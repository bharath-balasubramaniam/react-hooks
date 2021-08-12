import React, { Component } from "react";
import PostsTable from "./PostsTable";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [{ userId: "", title: "", body: "" }],
      userId: "",
      title: "",
      body: "",
      id: "",
    };
  }
  render() {
    return (
      <>
        <h1>Blog Posts</h1>
        <PostsTable />
      </>
    );
  }
}

export default Posts;
