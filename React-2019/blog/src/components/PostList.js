import React from 'react';
import { connect } from 'react-redux';

// reminder that the actions folder has index.js
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    {/* Calls on the action creator in actions/index.js */}
    this.props.fetchPostsAndUsers();
  }

  renderList() {

    let counter = 0;
    const notFinite = 999;
    
    return this.props.posts.map(post => {

      if (counter < notFinite) {
        counter += 1;
        return (
          <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
          <div className="description">
          <h2>{counter}.) {post.title}</h2>
          <p>{post.body}</p>
          </div>
          {/* User ID from UserHeader to retrieve Username */}
          <UserHeader userId={post.userId} />
          </div>
          </div>
        );
      }

    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

// Initially put as null because there wasn't a props to put in the component
// fetchPostsAndUsers: fetchPostsAndUsers
export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
