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

    saveData(receptId, recepts);
    saveData(usersId, users);
  }

  render() {
    return (
      <div>
        <Header />
        <ReceptList recepts={getData(receptId)} />
      </div>
    );
  }
}
