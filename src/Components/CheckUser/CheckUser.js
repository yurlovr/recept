import getData from "../StorageCompanents/GetData/GetData";
import { usersId } from "../../Container/App/App";

export default function CheckUser(userData) {
  // console.log("user", userData);
  const USERS = getData(usersId);
  // console.log("USERS", USERS);
  let objectUser = {
    userLogin: "",
    userPassword: ""
  };

  let login = userData.userLogin;
  let password = userData.userPassword;

  USERS.forEach(users => {
    if (
      users.login.toLowerCase() === login.toLowerCase() &&
      users.password.toLowerCase() === password.toLowerCase()
    ) {
      objectUser.userLogin = login;
      objectUser.userPassword = password;
    }
  });
  if (!objectUser.userLogin /*|| !objectUser.userPassword*/) {
    alert("Неверный логин или пароль!");
  } else {
    userData.button = "Выйти";
    userData.regShow = false;
    userData.inputShow = false;
  }
  // console.log('objectUser LoginForm ',objectUser);
  return objectUser;
}
