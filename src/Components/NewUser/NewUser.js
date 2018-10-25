import getData from "../StorageCompanents/GetData/GetData";
import { usersId } from "../../Container/App/App";
import saveData from "../StorageCompanents/SaveData/SaveData";

export default function NewUser(data) {
  // console.log(data);
  let allUsers = getData(usersId);
  // console.log(allUsers);
  if (data.login && data.password) {
    if (
      allUsers.every(user => {
        return user.login.toLowerCase() !== data.login.toLowerCase();
      })
    ) {
      allUsers.push(data);
      // console.log(allUsers);
      saveData(usersId, allUsers);

      return true;
    } else {
      return false;
    }
  } else {
    alert("Введите логин и пароль!!!");
    return false;
  }
}
