import React from "react";
import getData from "../StorageCompanents/GetData/GetData";
import { usersId } from "../../Container/App/App";

export default function CheckUser(userData) {
  console.log("user", userData);
  const USERS = getData(usersId);
  console.log("USERS", USERS);
  let objectUser = {
    userLogin: "",
    userPassword: ""
  };

  USERS.forEach(users => {
    if (users.login.toLowerCase() === userData.userLogin.toLowerCase() &&
      users.password.toLowerCase() === userData.userPassword.toLowerCase()) {
      objectUser.userLogin = userData.userLogin;
      objectUser.userPassword = userData.userPassword;
    }
});
  if (!objectUser.userLogin || !objectUser.userPassword) {
    alert('Неверный логин или пароль!');
  } else {
    userData.button = 'Выйти';
    userData.regShow = false;
    userData.inputShow = false;
  }

  return objectUser;
}
