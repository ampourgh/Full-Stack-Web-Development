import React, { Component } from 'react';

class JSONcontent extends Component {
  render() {

    const {post} = this.props;

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.detail}</p>
        <a href={`/id/${post.id}`} >Learn More</a>

      </div>
    );
  }
}

export default JSONcontent;
