import React, { Component } from "react";
import CheckUser from "../CheckUser/CheckUser";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    // console.log('propsLoginForm', props);

    this.state = {
      userLogin: "",
      userPassword: "",
      button: "Войти",
      regShow: true,
      inputShow: true
    };

    this.defaultState = { ...this.state };

    this.loginUser = this.loginUser.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  render() {
    return (
      <form className="d-flex flex-column align-items-end">
        {this.state.inputShow && (
          <label htmlFor="userLogin">
            <input
              className="mr-3 form-control"
              id="userLogin"
              type="text"
              placeholder="Login"
              value={this.state.userLogin}
              onChange={this.updateValue}
            />
          </label>
        )}

        {!this.state.inputShow && (
          <button
            className="btn btn-success  form-control w-auto mb-2"
            style={{ marginRight: 0 + "px!important" }}
            type="button"
            disabled
          >
            {" "}
            Добавить рецепт
          </button>
        )}

        {this.state.inputShow && (
          <label htmlFor="usedrPassword">
            <input
              className="mr-3 form-control"
              id="userPassword"
              type="password"
              placeholder="Password"
              value={this.state.userPassword}
              onChange={this.updateValue}
            />
          </label>
        )}
        {!this.state.inputShow && (
          <button
            className="btn btn-success  form-control w-auto"
            style={{ marginRight: 0 + "px" }}
            type="button"
            disabled
          >
            {" "}
            Редактировать рецепт
          </button>
        )}

        <div className="d-flex justify-content-between w-100 mt-2 align-items-baseline">
          {this.state.regShow && (
            <RegistrationForm
              data={this.props.data}
              redactRecept={this.props.redactRecept}
            />
          )}
          {!this.state.regShow && (
            <p className="mr-2" style={{ marginTop: 8 + "px" }}>
              {" "}
              Вы вошли как: {this.state.userLogin}
            </p>
          )}
          <button
            className="btn btn-success "
            type="submit"
            onClick={this.loginUser}
          >
            {this.state.button}
          </button>
        </div>
      </form>
    );
  }

  loginUser(event) {
    event.preventDefault();

    if (this.state.regShow) {
      this.setState(CheckUser(this.state), () => {
        this.props.user(this.state.userLogin);
      });
    } else {
      this.setState(
        {
          ...this.defaultState
        },
        () => {
          this.props.user(this.state.userLogin);
        }
      );
    }
  }

  updateValue(e) {
    let targetId = e.target.id;
    let target = e.target.value;

    this.setState(
      {
        ...this.state,
        [targetId]: target
      }
      // () => {
      //   console.log({ ...this.state });
      // }
    );
  }
}
export default LoginForm;
