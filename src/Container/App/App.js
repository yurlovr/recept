import React, { Component, Fragment } from "react";
import saveData from "../../Components/StorageCompanents/SaveData/SaveData.js";
import recepts from "../../data/recepts.json";
import users from "../../data/users.json";
import ReceptList from "../ReceptList/ReceptList.js";
import getData from "../../Components/StorageCompanents/GetData/GetData.js";
import Header from "../../Components/Header/Header.js";
import Modal from "../../Components/modal/Modal";

export const receptId = "my-recept";
export const usersId = "my-users";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    if (localStorage.getItem(receptId) === null) {
      saveData(receptId, recepts);
    }
    if (localStorage.getItem(usersId) === null) {
      saveData(usersId, users);
    }

    this.openModal = this.openModal.bind(this);
  }

  render() {
    return (
      <Fragment>
        {this.state.modalOpen && <Modal data={this.openModal} />}
        <Header data={this.openModal} />
        <ReceptList recepts={getData(receptId)} />
      </Fragment>
    );
  }

  openModal(data) {
    this.setState({
      modalOpen: data
    });
  }
}
