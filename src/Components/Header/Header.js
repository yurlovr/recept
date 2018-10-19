import React, { Fragment } from "react";
import LoginForm from "../LoginForm/LoginForm";



function Header(data) {
  return (
    <Fragment>
      <header className="alert alert-success rounded text-center d-flex justify-content-center">
        <h1
          className="mb-3 flex-grow-1"
          style={{ marginLeft: 6 + "em", paddingTop: 1 + "em" }}
        >
          Кулинарная книга
        </h1>
       <LoginForm  data={data.data}/>
      </header>
    </Fragment>
  );
}

export default Header;
