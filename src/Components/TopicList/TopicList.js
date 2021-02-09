import React, { Component } from "react";
import {Link} from 'react-router-dom'
//imports post array from post jason file. 
import posts from "./../../post_data.json";
import "./TopicList.css";

class TopicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  //updates post array to be equal to the post json file
  componentDidMount() {
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be using an array of dummy data
    this.setState({
      posts: posts
    });
  }

  ///////////Original//////////////
//   render() {
//     const { posts } = this.state;
//     let displayTopics = posts.map(post => {
//       return <li key={post.id}>{post.title}</li>;
//     });
//     return (
//       <div className="TopicList">
//         <h1>Latest Blog Posts...</h1>
//         <ul>{displayTopics}</ul>
//       </div>
//     );
//   }
// }
////////////What We've changed/////////
render() {
  const { posts } = this.state;
  let displayTopics = posts.map(post => {
  //maps through the array to display the title 
  //of each post and shows those topics
    return <li key={post.id}>
        {/* we added a link tag around each topic and assigned it to 
        a unique route which is using the post id to specity what each topic 
        will display. we set this up in routes.js by setting the path for Post
        to be '/post/:id' */}
        <Link to={`/post/${post.id}`}>
          {post.title}
        </Link>
      </li>;
  });
  return (
    <div className="TopicList">
      <h1>Latest Blog Posts...</h1>
      <ul>{displayTopics}</ul>
    </div>
  );
}
}

export default TopicList;
