import React, { Fragment } from "react";

function Header() {
  return (
    <Fragment>
      <header className="alert alert-success rounded text-center d-flex justify-content-center">
        <h1
          className="mb-3 flex-grow-1"
          style={{ marginLeft: 6 + "em", paddingTop: 1 + "em" }}
        >
          Кулинарная книга
        </h1>
        <form className="d-flex flex-column align-items-end">
          <label htmlFor="userLogin">
            <input
              className="mr-3 form-control"
              id="userLogin"
              type="text"
              placeholder="Login"
            />
          </label>
          <label htmlFor="usedrPassword">
            <input
              className="mr-3 form-control"
              id="userPassword"
              type="password"
              placeholder="Password"
            />
          </label>
          <div className="d-flex justify-content-between w-100 mt-2">
            <a className="pt-2  alert-success" href="#">
              Регистрация
            </a>
            <button className="btn btn-success" type="submit">
              Войти
            </button>
          </div>
        </form>
      </header>

      <main />
    </Fragment>
  );
}

export default Header;
