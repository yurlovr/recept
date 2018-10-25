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
      modalOpen: false,
      user: false,
      receptId: "",
      updateReceptList: false
    };

    if (localStorage.getItem(receptId) === null) {
      saveData(receptId, recepts);
    }
    if (localStorage.getItem(usersId) === null) {
      saveData(usersId, users);
    }

    this.openModal = this.openModal.bind(this);
    this.userEnter = this.userEnter.bind(this);
    this.userIsOn = this.userIsOn.bind(this);
    this.userRedactRecept = this.userRedactRecept.bind(this);
    this.updateReceptList = this.updateReceptList.bind(this);
  }

  render() {
    return (
      <Fragment>
        {this.state.modalOpen && (
          <Modal
            data={this.openModal}
            receptId={this.state.receptId}
            user={this.state.user}
            updateReceptList={this.updateReceptList}
            updateStateRecetpList={this.state.updateReceptList}
          />
        )}
        <Header
          data={this.openModal}
          user={this.userEnter}
          redactRecept={this.userRedactRecept}
        />
        {this.state.updateReceptList && (
          <ReceptList
            recepts={getData(receptId)}
            user={this.userIsOn}
            redactRecept={this.userRedactRecept}
          />
        )}
        {!this.state.updateReceptList && (
          <ReceptList
            recepts={getData(receptId)}
            user={this.userIsOn}
            redactRecept={this.userRedactRecept}
          />
        )}
      </Fragment>
    );
  }

  openModal(data) {
    this.setState(
      {
        modalOpen: data
      }
      // () => {
      //   console.log("this.state.modalOpen App ", this.state.modalOpen);
      // }
    );
  }

  userEnter(data) {
    if (data) {
      // console.log("userEnterApp", data);
      this.setState(
        {
          user: data
        }
        // () => {
        //   console.log("this.state.user App ", this.state.user);
        // }
      );
    } else {
      // console.log("userEnterApp", data);
      this.setState({
        user: false
      });
    }
  }

  userIsOn() {
    return this.state.user;
  }

  userRedactRecept(data) {
    // console.log("tut");
    this.setState({
      modalOpen: true,
      receptId: data
    });
  }

  updateReceptList(data) {
    this.setState({
      updateReceptList: data
    });
  }
}
