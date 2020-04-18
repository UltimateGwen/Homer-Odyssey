import React from 'react';
import { TextField, Button, SnackbarContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './signup.css';
const vertical = 'bottom';
const horizontal = 'center';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email:',
      password: 'Password:',
      passwordConf: 'Confirm password:',
      firstname: 'First name:',
      lastname: 'Last Name:',
    };
    this.updateEmailField = this.updateEmailField.bind(this);

    this.updatePasswordField = this.updatePasswordField.bind(this);

    this.updatePasswordConfField = this.updatePasswordConfField.bind(this);

    this.updateFirstnameField = this.updateFirstnameField.bind(this);

    this.updateLastnameField = this.updateLastnameField.bind(this);
  }

  updateEmailField = (event) => {
    this.setState({ email: event.target.value });
  };

  updatePasswordField = (event) => {
    this.setState({ password: event.target.value });
  };

  updatePasswordConfField = (event) => {
    this.setState({ passwordConf: event.target.value });
  };

  updateFirstnameField = (event) => {
    this.setState({ firstname: event.target.value });
  };

  updateLastnameField = (event) => {
    this.setState({ lastname: event.target.value });
  };

  updateLastnameField = (event) => {
    this.setState({ lastname: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Sign up motherf*ckers!</h1>
        <form onSubmit={this.handleSubmit}>
          <p>{this.state.email}</p>
          <input name="email" type="email" onChange={this.updateEmailField} />

          <p>{this.state.password}</p>
          <input
            name="password"
            type="text"
            onChange={this.updatePasswordField}
          />

          <p>{this.state.passwordConf}</p>
          <input
            name="passwordConf"
            type="text"
            onChange={this.updatePasswordConfField}
          />

          <p>{this.state.firstname}</p>
          <input
            name="firstname"
            type="text"
            onChange={this.updateFirstnameField}
          />

          <p>{this.state.lastname}</p>
          <input
            name="lastname"
            type="text"
            onChange={this.updateLastnameField}
          />
          <br />
          <br />
          <Link to="/">
            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
          </Link>
        </form>
        {this.state.flash ? (
          <SnackbarContent
            className="snackbar"
            anchorOrigin={'bottom, center'}
            message={this.state.flash}
          />
        ) : null}
        {/* <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={this.state.open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.flash}</span>}
        /> */}
      </div>
    );
  }
}

export default SignUp;
