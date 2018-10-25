import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    // console.log('props RegistrationForm', props);
    this.state = {
      modalRegistrationUser: false,
      modalClosed: false
    };
    this.registrationUser = this.registrationUser.bind(this);
  }
  render() {
    return (
      <div>
        <a
          className="pt-2  alert-success"
          href="#"
          onClick={this.registrationUser}
        >
          Регистрация
        </a>
      </div>
    );
  }
  registrationUser() {
    this.setState(
      {
        modalRegistrationUser: !this.state.modalRegistrationUser,
        modalClosed: !this.state.modalClosed
      },
      () => {
        this.props.data(this.state.modalClosed);
        this.props.redactRecept(false);
        this.setState({
          modalClosed: false
        });
      }
    );
  }
}
export default RegistrationForm;
