import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_USER', user: this.state})
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            id="hometown"
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

export default connect()(UserInput);













// import React, { Component } from 'react';
// import { addUser } from '../actions/users';

// class UserInput extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       userName: '',
//       hometown: ''
//     };
//   }

//   handleOnUserNameChange(event) {
//     this.setState({
//       userName: event.target.value
//     });
//   }

//   handleOnHometownChange(event) {
//     this.setState({
//       hometown: event.target.value
//     });
//   }

//   handleOnSubmit(event) {
//     event.preventDefault();
//     this.props.store.dispatch(addUser(this.state))
//   }

//   render() {
//     return(
//       <form onSubmit={(event) => this.handleOnSubmit(event)}>
//       <p>
//         <input
//           type="text"
//           onChange={(event) => this.handleOnUserNameChange(event)}
//           placeholder="user name"/>
//       </p>
//       <p>
//         <input
//           type="text"
//           onChange={(event) => this.handleOnHometownChange(event)}
//           placeholder="hometown"/>
//       </p>
//         <input type="submit" />
//       </form>
//     )
//   }
// }

// export default UserInput;
