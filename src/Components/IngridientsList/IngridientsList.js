import React, { Component } from "react";

class IngridientsList extends Component {
  constructor(props) {
    super(props);

    // console.log("props IngridientsList ", props);
    this.st = {};

    props.data.forEach((ingridients, index) => {
      // console.log("ingridients ", ingridients, " index ", index);
      let string = "ingridientsCooking" + index;
      this.st[string] = ingridients;
      // console.log("this.st", this.st);
    });

    this.state = {
      ...this.st
    };

    this.updateValue = this.updateValue.bind(this);
  }

  render() {
    let elementList = [];

    if (!this.props.redactRecept) {
      elementList = this.props.data.map((ingridients, index) => (
        <li key={index.toString()}>{ingridients}</li>
      ));
    } else {
      elementList = this.props.data.map((ingridients, index) => {
        let string = "ingridientsCooking" + index;
        return (
          <li key={index.toString()}>
            <p>{this.state[string]}</p>
            <p>
              <label htmlFor={string}>
                Ингридиент&nbsp;
                {index + 1} :&nbsp;
                <input
                  className="mr-3 form-control"
                  style={{ width: 290 + "px" }}
                  id={string}
                  type="text"
                  value={this.state[string]}
                  onChange={this.updateValue}
                />
              </label>
            </p>
          </li>
        );
      });
    }

    return <ul className="mb-3">{elementList}</ul>;
  }

  updateValue(e) {
    let targetId = e.target.id;
    let target = e.target.value;
    // console.log("targetId ", targetId, " taregt ", target);

    this.setState(
      {
        ...this.state,
        [targetId]: target
      },
      () => {
        let arrayIngridientsCooking = Object.keys(this.state).map(key => {
          return this.state[key];
        });
        this.props.updateSomeState(
          "ingridientsCooking",
          arrayIngridientsCooking
        );
      }
    );
  }
}

export default IngridientsList;
