import React, { Component } from "react";

class StepOfCooking extends Component {
  constructor(props) {
    super(props);

    console.log("props StepOfCookoing ", props);

    this.st = {};

    props.data.forEach((cookingStage, index) => {
      console.log("ingridients ", cookingStage, " index ", index);
      let string = "cookingStage" + index;
      this.st[string] = cookingStage;
      console.log("this.st", this.st);
    });

    this.state = {
      ...this.st
    };
    this.updateValue = this.updateValue.bind(this);
  }

  render() {
    let elementList = [];
    if (!this.props.redactRecept) {
      elementList = this.props.data.map((cookingStage, index) => (
        <li key={index.toString()} className="mb-3">
          <p className="mb-3 text-uppercase font-weight-bold">
            {" "}
            Шаг {index + 1}
          </p>
          {cookingStage}
        </li>
      ));
    } else {
      elementList = elementList = this.props.data.map((cookingStage, index) => {
        let string = "cookingStage" + index;

        return (
          <li key={index.toString()} className="mb-3">
            <p className="mb-3 text-uppercase font-weight-bold">
              {" "}
              Шаг {index + 1}
            </p>

            <p>
              <label htmlFor={string}>
                Шаг&nbsp;
                {index + 1} :&nbsp;
                <textarea
                  className="mr-3 form-control"
                  style={{ width: 290 + "px", height: 200 + "px" }}
                  id={string}
                  onChange={this.updateValue}
                  value={this.state[string]}
                >
                  {this.state[string]}
                </textarea>
              </label>
            </p>
          </li>
        );
      });
    }

    return <ul>{elementList}</ul>;
  }

  updateValue(e) {
    let targetId = e.target.id;
    let target = e.target.value;
    console.log("targetId ", targetId, " taregt ", target);

    this.setState(
      {
        ...this.state,
        [targetId]: target
      },
      () => {
        console.log({ ...this.state });
      }
    );
  }
}

export default StepOfCooking;
