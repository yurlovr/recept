import React, { Component } from "react";
import saveData from "../../Components/StorageCompanents/SaveData/SaveData.js";
import recepts from "../../data/recepts.json";
import users from "../../data/users.json";
import ReceptList from "../ReceptList/ReceptList.js";
import getData from "../../Components/StorageCompanents/GetData/GetData.js";
import Header from "../../Components/Header/Header.js";

export const receptId = "my-recept";
export const usersId = "my-users";

export default class App extends Component {
  constructor(props) {
    super(props);

    this._initSave = this._initSave.bind(this);
    this._initSave();
    const recepts = this._initGet();
  }

  render() {
    return (
      <div>
        <Header />
        <ReceptList recepts={recepts} />
      </div>
    );
  }

  _initSave() {
    if (localStorage.getItem(receptId) === null) {
      saveData(receptId, recepts)
    }
    if (localStorage.getItem(usersId) === null) {
      saveData(usersId, users); // сохраняем пользователей в localStorega
    }
  }

  _initGet() {
    const dataRecept = getData(receptId);
    return dataRecept;
  }
}
