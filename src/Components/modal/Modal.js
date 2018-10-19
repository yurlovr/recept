import React, { Component } from "react";
import NewUser from "../../Components/NewUser/NewUser";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalClosed: false,
      userLogin: "",
      userPassword: "",
      registration: true, // изменить стили при успешной либо не успешной регистрации
      registrationNewUser: false,
      registrationError: false
    };

    this.newUser = { ...this.state };

    this.modalClose = this.modalClose.bind(this);
    this.modalCloseEsc = this.modalCloseEsc.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  }

  render() {
    return (
      <div onKeyDown={this.modalCloseEsc}>
        {!this.state.modalClosed && (
          <div tabIndex="-1" role="dialog">
            <div
              className="modal-dialog"
              role="document"
              style={{
                position: "fixed",
                zIndex: 3,
                top: 30 + "%",
                left: 40 + "%"
              }}
            >
              <div className="modal-content">
                <div
                  className="modal-header"
                  style={
                    !this.state.registrationError
                      ? { backgroundColor: "#c3e6cb" }
                      : { backgroundColor: "#e89c9c" }
                  }
                >
                  <h5 className="modal-title">
                    {!this.state.registrationNewUser
                      ? "Регистрация нового пользователя"
                      : this.state.registrationError
                        ? "Ошибка регистрации пользователя!!!"
                        : "Вы успешно зарегистрированы!"}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={this.modalClose}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {!this.state.registrationNewUser ? (
                    <p className="d-flex flex-column align-items-center">
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
                    </p>
                  ) : this.state.registrationError ?
                   (
                    <div>
                      <p className="font-weight-bold">
                        Пользователь с таким Login
                        уже зарегистрирован!<br/>
                        Придумайте другой Login.
                      </p>
                    </div>
                    ):(
                    <div>
                      <p className="font-weight-bold">
                        Ваш логин:&nbsp; {this.newUser.login} <br />
                        Ваш пароль:&nbsp; Вы его знаете :)
                      </p>
                    </div>
                  )}
                </div>
                <div
                  className="modal-footer"
                  style={
                    !this.state.registrationError
                      ? { backgroundColor: "#c3e6cb" }
                      : { backgroundColor: "#e89c9c" }
                  }
                >
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    data-dismiss="modal"
                    onClick={this.modalClose}
                  >
                    Закрыть
                  </button>
                  {this.state.registration && (
                    <button
                      type="button"
                      className="btn  btn-outline-success"
                      onClick={this.addNewUser}
                    >
                      Зарегистрироваться
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {!this.state.modalClosed && (
          <div
            style={{
              opacity: 0.3,
              backgroundColor: "green",
              width: 100 + "%",
              height: 100 + "%",
              top: 0,
              left: 0,
              position: "fixed",
              zIndex: 2
            }}
          />
        )}
      </div>
    );
  }

  modalClose() {
    this.setState(
      {
        modalClosed: !this.state.modalClosed
      },
      () => {
        this.props.data(this.state.modalClosed);
      }
    );
    this.setState({
      modalClosed: false
    });
  }

  modalCloseEsc(event) {
    if (event.keyCode === 27) {
      this.modalClose();
    }
  }

  updateValue(e) {
    let targetId = e.target.id;
    let target = e.target.value;

    this.setState(
      {
        ...this.state,
        [targetId]: target
      },
      () => {
        this.newUser = {
          login: this.state.userLogin,
          password: this.state.userPassword
        };
      }
    );
  }

  addNewUser() {
    let registration = NewUser(this.newUser);
    if (registration) {
      this.setState({
        registration: false,
        registrationNewUser: true
      });
    } else {
      this.setState({
        registration: false,
        registrationError: true,
        registrationNewUser: true

      });
    }
  }
}

export default Modal;
