import React, { Component } from "react";
import axios from "axios";
import PostsForm from "./PostsForm";
const API_URL_Posts = "https://jsonplaceholder.typicode.com/posts";
export default class PostsTable extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      userId: "",
      title: "",
      body: "",
      id: "",
    };
  }
  componentDidMount() {
    this.getPosts();
  }
  //1.READ from API => axios.get(url)(using async and await api request and asign to the posts using setstate )
  getPosts = async () => {
    const response = await axios.get(API_URL_Posts);
    this.setState({ posts: response.data });
  };
  //2.Delete from API => axios.delete(url/id)(using filter for remove the button click id from the state)
  deletePosts = async (id) => {
    await axios.delete(`${API_URL_Posts}/${id}`);
    const data = this.state.posts.filter((item) => item.id !== id);
    this.setState({ posts: data });
  };
  //3.Create and fetch to API => axios.post(url,{})

  //getchange is used to change the input field values
  getChange = async ({ target: { name, value } }) => {
    // target: { name, value }
    await this.setState({
      [name]: value,
    });
  };
  // Createpost is used to push the values to the api using axios.post(url,{}) and we push the value to the variable and use that variable with setstate of posts
  createPost = async () => {
    const { data } = await axios.post(API_URL_Posts, {
      userId: this.state.userId,
      title: this.state.title,
      body: this.state.body,
    });
    const post = [...this.state.posts];
    post.push(data);
    // this.state.posts.push(data);
    this.setState({ posts: post });
    this.setState({ userId: "", title: "", body: "", id: "" });
  };
  // 4. update the api using axios.put(url/id)
  //getBackData function is used to get the from the table to the input field if you click the edit button
  getBackData = (obj) => {
    this.setState({
      userId: obj.userId,
      title: obj.title,
      body: obj.body,
      id: obj.id,
    });
  };
  //updatePost is used to modify the api with axios.put(api-url/{id},{})
  updatePost = async () => {
    const { id, userId, title, body } = this.state;
    const { data } = await axios.put(`${API_URL_Posts}/${id}`, {
      userId,
      title,
      body,
    });
    const posts = [...this.state.posts];
    const postIndex = posts.findIndex((post) => post.id === id);
    posts[postIndex] = data;

    this.setState({ posts, userId: "", title: "", body: "", id: "" });
  };
  //the handlechange perform two thing because we use form submit for the create and update too so we are using if else condition
  handleChange = (event) => {
    event.preventDefault();
    if (!this.state.id) {
      this.createPost();
    }
    if (this.state.id) {
      this.updatePost();
    }
  };
  render() {
    return (
      <>
        <PostsForm
          name={this.state}
          place={this.getChange}
          // test={this.createPost}
          test={this.handleChange}
        />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>User Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
              <th>Comments And Users</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((obj) => {
              return (
                <tr key={obj.id}>
                  <td>{obj.id}</td>
                  <td>{obj.userId}</td>
                  <td>{obj.title}</td>
                  <td>{obj.body}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.getBackData(obj)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deletePosts(obj.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-info">User</button>
                    <button className="btn btn-warning">Comments</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
