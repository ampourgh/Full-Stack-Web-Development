import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

// ownProps <-- is a copy of the props that will be sent to the userHeader
const mapStateToProps = (state, ownProps) => {

  console.log('STATE PROPS: ');
  console.log(state.users);
  console.log('OWN PROPS: ');
  console.log(ownProps);

  // ownProps was previously in this.props.userId(?)
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
