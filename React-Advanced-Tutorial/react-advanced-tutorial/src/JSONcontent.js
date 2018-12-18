import React, { Component } from 'react';

class JSONcontent extends Component {

  constructor(props) {
    super(props);
    this.h1OnClick = this.h1OnClick.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
    this.state = {
      showContent: false,
      postItem: null
    };
  };

  h1OnClick() {
    // event.preventDefault();
    const {dataCallback} = this.props;

    const newPost = {
      title: "[" + this.state.postItem.title + "]",
      content: this.state.postItem.content
    }


    this.setState({
      postItem: newPost
    });

    dataCallback("Some message inserted here.");
  }

  toggleClick(event) {
    event.preventDefault();
    // variable declaration here abbreviates the setState's !this.state.showContent to !showContent
    const {showContent} = this.state;
    this.setState({
      showContent: !showContent
    });
  }

  componentDidMount() {
    this.setState({
      postItem: this.props.post
    });
  }

  render() {
    // const {post} = this.props; <-- originally props
    const {postItem} = this.state;
    const {showContent} = this.state;
    return (
      <div>
        {postItem !== null ?<div>
          <h1 onClick={this.h1OnClick}>{postItem.title}</h1>
          {showContent === true ? <p>{postItem.detail}</p> : ""}
          <button onClick={this.toggleClick}>Learn More</button>
          <br /><br />
          <a href={`/id/${postItem.id}`} >Learn Even More</a>
          <hr />
        </div>
        : ''}
      </div>
    );
  }
}

export default JSONcontent;
