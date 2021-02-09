import React, { Component } from "react";
import posts from "./../../post_data.json";
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  componentDidMount() {
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be filtering an array of dummy data


    //here we changed the condition to match the id 
    //and it will set state to match with the id so that 
    //what is rendered matches the id

    // it was --- let post = posts.find(post => post.id === 2);
    let post = posts.find(post => post.id === +this.props.match.params.id);
    this.setState({
      title: post.title,
      content: post.content
    });
  }
  render() {
    const { title, content } = this.state;
    return (
      <div className="Post">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  }
}

export default Post;
