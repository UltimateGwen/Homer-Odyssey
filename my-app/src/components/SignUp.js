import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email:'
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>

        <input name="email" type="email" onChange={this.updateEmailField} />
      </div>
    );
  }
}

export default SignUp;
