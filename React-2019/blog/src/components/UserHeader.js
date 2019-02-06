import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const { classUser } = this.props;

    if (!classUser) {
      return null;
    }

    return <div className="header">{classUser.name}</div>;
  }
}

// ownProps <-- is a copy of the props that will be sent to the userHeader
const mapStateToProps = (state, ownProps) => {

  console.log('STATE PROPS: ');
  console.log(state.reducerUsers);
  console.log('OWN PROPS: ');
  console.log(ownProps);

  // ownProps was previously in this.props.userId(?)
  return { classUser: state.reducerUsers.find(user => user.id === ownProps.userId) }; // TODO: figure out the parenthesis
};

export default connect(mapStateToProps)(UserHeader);
