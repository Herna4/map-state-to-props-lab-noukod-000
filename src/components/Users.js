import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) =>
    <li key={index}>{user.username}</li>
    )

    return (
      <div>
        <h3>Users: {this.props.users.length}</h3>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  console.log(state)
  return {users: state.users}
}

export default connect(mapStateToProps)(Users);