import React, { Component } from 'react';

class JSONcontent extends Component {

  constructor(props) {
    super(props);
    this.h1OnClick = this.h1OnClick.bind(this);
  };

  h1OnClick() {
    // event.preventDefault();
    const {dataCallback} = this.props;
    dataCallback("Some message inserted here.");
  }

  render() {
    const {post} = this.props;
    return (
      <div>
        <h1 onClick={this.h1OnClick}>{post.title}</h1>
        <p>{post.detail}</p>
        <a href={`/id/${post.id}`} >Learn More</a>
      </div>
    );
  }
}

export default JSONcontent;
